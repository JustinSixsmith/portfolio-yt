import { PageInfo } from "@/types/PageInfo";
import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "1etqlj0y",
    dataset: "production",
    apiVersion: "2023-06-01",
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

export async function getPageInfo(): Promise<PageInfo[]> {
  const client = createClient({
    projectId: "1etqlj0y",
    dataset: "production",
    apiVersion: "2023-06-01",
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        role,
        "heroImage": heroImage.asset->url,
        backgroundInformation,
        "profilePic": profilePic.asset->url,
        phoneNumber,
        email,
        address,
    }`
  );
}
