import { Router } from "express";
import { pingRoutes } from "./ping.js";

const mainRouter = Router();

mainRouter.get("/status", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

mainRouter.use(pingRoutes);

export default mainRouter;