import { GeminiEmbeddings } from "../utils/embedding";

// const embeddings = new OllamaEmbeddings({
//   model: "nomic-embed-text",
//   baseUrl: "http://127.0.0.1:11434",
// });

const embeddings = new GeminiEmbeddings();

export async function createEmbedding(text: string) {
  return await embeddings.embedQuery(text);
}
