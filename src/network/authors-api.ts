import { AuthorDB } from "@/app/author";
import dbInstance from "./dbInstance";

const endpoint = "authors";

export async function getAuhors() {
  const response = await dbInstance.get<AuthorDB[]>(endpoint);

  return response.data;
}

export async function getAuthorByKey(id: string) {
  const delay = Math.random() * 1000;
  await new Promise((r) => setTimeout(r, delay));

  const response = await dbInstance.get<AuthorDB>(`${endpoint}/${id}`);

  return response.data;
}
