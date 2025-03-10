import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "y5zakwvd",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025/03/10",
});
