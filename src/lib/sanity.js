import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "y5zakwvd",
  dataset: "thrivespheredb",
  useCdn: false,
  apiVersion: "2025/03/15",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});
