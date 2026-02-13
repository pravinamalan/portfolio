import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// ============================================
// TABLE DEFINITIONS
// ============================================
export const demoRequests = pgTable("demo_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  communitySize: text("community_size").notNull(),
  message: text("message"),
});

export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
});

// ============================================
// BASE INSERT SCHEMAS
// ============================================
export const insertDemoRequestSchema = createInsertSchema(demoRequests).omit({
  id: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
});

// ============================================
// EXPLICIT API CONTRACT TYPES
// ============================================

// Base row types
export type DemoRequest = typeof demoRequests.$inferSelect;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Insert types
export type InsertDemoRequest = z.infer<typeof insertDemoRequestSchema>;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

// Request types
export type CreateDemoRequestRequest = InsertDemoRequest;
export type CreateContactMessageRequest = InsertContactMessage;

// Response types
export type DemoRequestResponse = DemoRequest;
export type ContactMessageResponse = ContactMessage;
