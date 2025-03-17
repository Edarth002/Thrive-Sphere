import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "y5zakwvd",
  dataset: "thrivespheredb",
  useCdn: false,
  apiVersion: "2024-03-13",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
