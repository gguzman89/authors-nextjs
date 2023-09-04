import { AuthorResults, Author } from "@/app/author";
import instanceLibrary from "./axiosInstances";

export enum typeOfResult {
  JSON = "json",
  RDF = "rdf",
  YML = "yml",
}

export const pageSize = 12;

export async function getAuthorSearch(name: string, { page = 1 }: { page?: number }) {
  /* 
  limit: docs count per results
  offset: page number of results
  */

  // {params: {
  //   limit,
  //   offset
  // }}

  const delay = Math.random() * 1000;
  await new Promise(r => setTimeout(r, delay));

  const response = await instanceLibrary.get<AuthorResults>(
    `search/authors.json?q=${name}&limit=${pageSize}&offset=${
      pageSize * (page - 1)
    }`
  );

  return response.data;
}

export async function getAuthorByKey(authorId: string) {
  // https://openlibrary.org/authors/OL23919A.json
  const response = await instanceLibrary.get<Author>(
    `authors/${authorId}.json`
  );

  return response.data;
}
