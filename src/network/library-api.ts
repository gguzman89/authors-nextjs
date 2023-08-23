import { AuthorResults, Author } from "@/app/author";
import instanceLibrary from "./axiosInstances";

export enum typeOfResult {
  JSON = "json",
  RDF = "rdf",
  YML = 'yml',
}

export async function getAuthorSearch(name: string) {
  const response = await instanceLibrary.get<AuthorResults>(`search/authors.json?q=${name}&limit=10`);

	return response.data;
}

export async function getAuthorByKey(authorId: string | undefined) {

  // https://openlibrary.org/authors/OL23919A.json
  const response = await instanceLibrary.get<Author>(`authors/${authorId}.json`);

  return response.data;
}