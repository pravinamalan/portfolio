import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";
function parseWithLogging(schema, data, label) {
    const result = schema.safeParse(data);
    if (!result.success) {
        console.error(`[Zod] ${label} validation failed:`, result.error.format());
        throw result.error;
    }
    return result.data;
}
export function useCreateDemoRequest() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (input) => {
            const validated = parseWithLogging(api.demoRequests.create.input, input, "demoRequests.create.input");
            const res = await fetch(api.demoRequests.create.path, {
                method: api.demoRequests.create.method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(validated),
                credentials: "include",
            });
            if (!res.ok) {
                if (res.status === 400) {
                    const err = parseWithLogging(api.demoRequests.create.responses[400], await res.json(), "demoRequests.create.responses[400]");
                    throw new Error(err.message);
                }
                throw new Error(`Failed to submit demo request (${res.status})`);
            }
            return parseWithLogging(api.demoRequests.create.responses[201], await res.json(), "demoRequests.create.responses[201]");
        },
        onSuccess: async () => {
            // No list endpoints exist yet; still a good habit to invalidate anything related.
            await queryClient.invalidateQueries();
        },
    });
}
