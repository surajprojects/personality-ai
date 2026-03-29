import { searchVector } from "./vector.service";
import { generateResponse } from "./llm.service";
import { buildPrompt } from "../utils/promptBuilder";
import { createEmbedding } from "./embedding.service";

export async function runChat(message: string) {
  // 1 embed query
  const embedding = await createEmbedding(message);

  // 2 retrieve context
  const context = await searchVector(embedding);

  // 3 build prompt
  const prompt = buildPrompt(context, message);

  // 4 generate response
  const response = await generateResponse(prompt);

  return response;
}
