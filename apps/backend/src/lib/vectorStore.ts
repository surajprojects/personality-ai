import { GeminiEmbeddings } from "../utils/embedding";
import { FaissStore } from "@langchain/community/vectorstores/faiss";

// const embeddings = new OllamaEmbeddings({
//   model: "nomic-embed-text",
//   baseUrl: "http://127.0.0.1:11434",
// });

const embeddings = new GeminiEmbeddings();

export let vectorStore: FaissStore;

async function init() {
  vectorStore = await FaissStore.load("./src/db/memory_vector", embeddings);
}

init();
