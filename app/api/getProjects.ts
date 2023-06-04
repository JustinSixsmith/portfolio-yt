import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "1etqlj0y",
    dataset: "production",
    apiVersion: "2023-06-01",
    useCdn: false,
  });

  return client.fetch(groq`*[_type == "project"] {
    ...,
    technologies[]->
  }`);
}
