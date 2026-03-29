import { GoogleGenAI } from "@google/genai";

// const model = new Ollama({
//   model: "llama3.1",
//   baseUrl: "http://127.0.0.1:11434",
// });

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

export async function generateResponse(prompt: string) {
  // return await model.invoke(prompt);
  return await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });
}
