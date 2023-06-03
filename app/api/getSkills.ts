import { Skill } from "@/types/Skill";
import { createClient, groq } from "next-sanity";

export async function getPageInfo(): Promise<Skill[]> {
  const client = createClient({
    projectId: "1etqlj0y",
    dataset: "production",
    apiVersion: "2023-06-01",
    useCdn: false,
  });

  return client.fetch(groq`*[_type == "skill"]`);
}
