import { Router, type Request, type Response } from "express";

export const pingRoutes = Router();

pingRoutes.get('/ping', (req: Request, res: Response) => {
  res.json({ pong: true });
});

pingRoutes.get('/privateping', (req: Request, res: Response) => {
  res.json({ pong: true, private: true });
});