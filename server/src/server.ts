import express, { Request, Response } from "express";
import cors from "cors"; 
import dotenv from "dotenv";

dotenv.config(); 
const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: process.env.URL || "http://localhost:5173",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  })
);

app.use(express.json());

app.get("/api/data", async (req: Request, res: Response) => {
  res.json({ data: "Sample Data1" });
});

export const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;