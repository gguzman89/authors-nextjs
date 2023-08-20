import { AuthorResults } from "@/app/author";
import instanceLibrary from "./axiosInstances";

export enum typeOfResult {
  JSON = "json",
  RDF = "rdf",
  YML = 'yml',
}

const authors = `authors.${typeOfResult.JSON}`

export async function getAuthorSearch(name: string) {
  const response = await instanceLibrary.get<AuthorResults>(`${authors}?q=${name}&limit=10`);

	return response.data;
}