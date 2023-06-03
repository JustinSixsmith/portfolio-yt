import { PageInfo } from "@/types/PageInfo";
import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "1etqlj0y",
    dataset: "production",
    apiVersion: "2023-06-01",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        title,
        "image": image.asset->url,
        summary,
        "technologies": technologies[]->title,
        linkToBuild
    }`
  );
}

export async function getExperience(): Promise<PageInfo[]> {
  const client = createClient({
    projectId: "1etqlj0y",
    dataset: "production",
    apiVersion: "2023-06-01",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "experience"]{
        _id,
        _createdAt,
        jobTitle,
        "companyImage": companyImage.asset->url,
        company,
        dateStarted,
        dateEnded,
        phoneNumber,
        isCurrentlyWorkingHere,
        "technologies": technologies[]->title,
        "points": points[]->title,
    }`
  );
}
