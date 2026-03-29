import { vectorStore } from "../lib/vectorStore";

export async function searchVector(embedding: number[]) {
  const results = await vectorStore.similaritySearchVectorWithScore(embedding, 5);

  return results.map((r) => r[0].pageContent);
}
