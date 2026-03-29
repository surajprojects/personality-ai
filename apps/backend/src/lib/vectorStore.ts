import { client } from "../db";
import { GeminiEmbeddings } from "../utils/embedding";
import { QdrantVectorStore } from "@langchain/qdrant";

const embeddings = new GeminiEmbeddings();

export let vectorStore: QdrantVectorStore;

async function init() {
  vectorStore = await QdrantVectorStore.fromExistingCollection(embeddings, {
    client,
    collectionName: "joylene_memory",
  });
}

init();
