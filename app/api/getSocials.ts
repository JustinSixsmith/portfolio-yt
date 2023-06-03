import { Social } from "@/types/Social";
import { createClient, groq } from "next-sanity";

export async function getSocials(): Promise<Social[]> {
  const client = createClient({
    projectId: "1etqlj0y",
    dataset: "production",
    apiVersion: "2023-06-01",
    useCdn: false,
  });

  return client.fetch(groq`*[_type == "social"]`);
}
