import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "src"),
        },
    },
    root: ".",
    build: {
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        if (
                            id.includes("gsap") ||
                            id.includes("framer-motion") ||
                            id.includes("lucide-react")
                        ) {
                            return "vendor-core";
                        }
                        return "vendor";
                    }
                },
            },
        },
    },
});
