import { Request, Response } from "express";
import { runChat } from "../services/ai.orchestrator";

export async function chatController(req: Request, res: Response) {
  try {
    const { message } = req.body;

    const response = await runChat(message);
    const text = response.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    res.json({
      response: text,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "AI failed",
    });
  }
}
