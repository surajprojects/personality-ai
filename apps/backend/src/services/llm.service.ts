import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

export async function generateResponse(prompt: string) {
  return await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });
}
