import express from "express";
import helmet from "helmet";
import mainRouter from "./routes/main.js";

const server = express();
const PORT = process.env.PORT || 3001;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(helmet());

server.get("/", (req, res) => {
  res.send("Hello, World!");
});

server.use('/', mainRouter);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});