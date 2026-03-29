import { GeminiEmbeddings } from "../utils/embedding";

const embeddings = new GeminiEmbeddings();

export async function createEmbedding(text: string) {
  return await embeddings.embedQuery(text);
}
