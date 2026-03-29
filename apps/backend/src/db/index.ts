import { QdrantClient } from "@qdrant/js-client-rest";

export const client = new QdrantClient({
  url: "https://0b2cfec7-248b-4de5-aa53-15d4784d707e.us-east-1-1.aws.cloud.qdrant.io:6333",
  apiKey: process.env.QDRANT_API_KEY!,
});
