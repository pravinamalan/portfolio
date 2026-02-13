import { z } from "zod";
import {
  insertContactMessageSchema,
  insertDemoRequestSchema,
  type ContactMessage,
  type DemoRequest,
} from "@shared/schema";

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  demoRequests: {
    create: {
      method: "POST" as const,
      path: "/api/demo-requests" as const,
      input: insertDemoRequestSchema.extend({
        email: z.string().email(),
        fullName: z.string().min(1),
        company: z.string().min(1),
        communitySize: z.string().min(1),
        message: z.string().optional(),
      }),
      responses: {
        201: z.custom<DemoRequest>(),
        400: errorSchemas.validation,
      },
    },
  },
  contact: {
    create: {
      method: "POST" as const,
      path: "/api/contact" as const,
      input: insertContactMessageSchema.extend({
        email: z.string().email(),
        fullName: z.string().min(1),
        subject: z.string().min(1),
        message: z.string().min(1),
      }),
      responses: {
        201: z.custom<ContactMessage>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(
  path: string,
  params?: Record<string, string | number>,
): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type CreateDemoRequestInput = z.infer<typeof api.demoRequests.create.input>;
export type CreateDemoRequestResponse = z.infer<
  typeof api.demoRequests.create.responses[201]
>;

export type CreateContactInput = z.infer<typeof api.contact.create.input>;
export type CreateContactResponse = z.infer<typeof api.contact.create.responses[201]>;

export type ValidationError = z.infer<typeof errorSchemas.validation>;
export type NotFoundError = z.infer<typeof errorSchemas.notFound>;
export type InternalError = z.infer<typeof errorSchemas.internal>;
