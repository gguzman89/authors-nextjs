import useSWR from "swr";
import * as AuthorApi from "@/network/library-api";
import { AxiosError } from "axios";

export default function useAuthor(name: string) {
  const { data, isLoading } = useSWR(name, async () => {
    try {
      return await AuthorApi.getAuthorByKey(name);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        return null;
      } else {
        // custom error page
        throw error;
      }
    }
  });
  return {
    author: data,
    authorLoading: isLoading,
  };
}
