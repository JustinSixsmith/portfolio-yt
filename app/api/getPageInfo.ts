import { PageInfo } from "@/types/PageInfo";
import { createClient, groq } from "next-sanity";

export async function getPageInfo(): Promise<PageInfo> {
  const client = createClient({
    projectId: "1etqlj0y",
    dataset: "production",
    apiVersion: "2023-06-01",
    useCdn: false,
  });

  return client.fetch(groq`*[_type == "pageInfo"][0]`);
}