import { Embeddings } from "@langchain/core/embeddings";
import { GoogleGenAI } from "@google/genai";

export class GeminiEmbeddings extends Embeddings {
  private ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
  });

  constructor() {
    super({});
    this.ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });
  }

  async embedQuery(text: string): Promise<number[]> {
    const res = await this.ai.models.embedContent({
      model: "gemini-embedding-001",
      contents: text,
      config: {
        outputDimensionality: 768,
      },
    });

    const vector = res.embeddings?.[0]?.values;

    if (!vector) {
      throw new Error("Embedding failed");
    }

    return vector;
  }

  async embedDocuments(texts: string[]) {
    return Promise.all(texts.map((t) => this.embedQuery(t)));
  }
}
