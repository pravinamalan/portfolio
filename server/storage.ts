import { db } from "./db";
import {
  contactMessages,
  demoRequests,
  type CreateContactMessageRequest,
  type CreateDemoRequestRequest,
  type ContactMessageResponse,
  type DemoRequestResponse,
} from "@shared/schema";

export interface IStorage {
  createDemoRequest(input: CreateDemoRequestRequest): Promise<DemoRequestResponse>;
  createContactMessage(
    input: CreateContactMessageRequest,
  ): Promise<ContactMessageResponse>;
}

export class DatabaseStorage implements IStorage {
  async createDemoRequest(
    input: CreateDemoRequestRequest,
  ): Promise<DemoRequestResponse> {
    const [created] = await db.insert(demoRequests).values(input).returning();
    return created;
  }

  async createContactMessage(
    input: CreateContactMessageRequest,
  ): Promise<ContactMessageResponse> {
    const [created] = await db
      .insert(contactMessages)
      .values(input)
      .returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
