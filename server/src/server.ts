import express, { Request, Response } from "express";
import cors from "cors"; 
import dotenv from "dotenv";
import pg from "pg"; 

dotenv.config(); 

const app = express();
app.use(express.json());
const PORT = process.env.PORT;
const { Pool } = pg; 

app.use(
  cors({
    origin: process.env.URL || "http://localhost:5173",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  })
);

const pool = new Pool({
  connectionString: process.env.LOCALHOST_DATABASE_URL, 
}); 


app.get("/characters/search", async (req: Request, res: Response) => {
  const { name } = req.query; 
  try {
    const result = await pool.query("SELECT * FROM characters WHERE name = $1", [name]);
    res.json(result.rows); 
  } catch (error) {
    console.log("Error fetching character data: ", error);
    res.status(400).json(error); 
  }
});

export const server = app.listen(PORT, () => {
  console.log(`Mwahahhahaha! Server running on port ${PORT}`);
});

export default app;