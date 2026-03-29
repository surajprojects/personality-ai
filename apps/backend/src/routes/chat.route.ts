import express, { Router, Request, Response } from "express";
import { chatController } from "../controllers/chat.controller";

const router: Router = express.Router();

router.post("/", (req: Request, res: Response) => chatController(req, res));

export default router;
