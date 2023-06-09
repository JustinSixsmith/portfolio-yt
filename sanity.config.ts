import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";
import imageUrlBuilder from "@sanity/image-url";

const config = defineConfig({
  projectId: "1etqlj0y",
  dataset: "production",
  title: "Portfolio",
  apiVersion: "2023-06-01",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default config;

export const urlFor = (source: any) => imageUrlBuilder(config).image(source);
