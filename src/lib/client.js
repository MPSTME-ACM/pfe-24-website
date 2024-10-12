import "server-only";
import { createClient } from "next-sanity";

const config = {
  projectId: "tyrdk57u",
  dataset: "production",
  apiVersion: "2023-07-21",
  useCdn: true,
};
const client = createClient(config);
export default client;
