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

//Search bar request 
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

//New Character 
app.post("/addNewCharacter", async (req: Request, res: Response) => {
  const { commonName } = req.body; 
  try {
    const result = await pool.query(
      "INSERT INTO characters (commonName) VALUE ($1) RETURNING *", [commonName]
    );
    res.json(result.rows[0]); 
  } catch (error) {
    console.log("Error adding new character: ", error); 
    res.status(400).json(error); 
  }
}); 

//New Individual 
app.post("/addNewIndividual", async (req: Request, res: Response) => {
  const { nickname, characterId, generalLocation, exactLocation } = req.body; 
  try {
    const result = await pool.query( 
    "INSERT INTO individuals (nickname, characterId, generalLocation, exactLocation) VALUES ($1, $2, $3, $4) RETURNING *", 
    [nickname, characterId, generalLocation, exactLocation]
    ); 
    res.json(result.rows[0]); 
  } catch (error) {
    console.log("Error adding individual: ", error); 
    res.status(400).json(error); 
  }
}); 

//New Sighting 
app.post("/addNewSighting", async (req: Request, res: Response) => {
  const { time, individualId, generalLocation, exactLocation, lineLong, username } = req.body; 
  try {
    const result = await pool.query(
      "INSERT INTO sightings (time, individualId, generalLocation, exactLocation, lineLong, username) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", 
      [time, individualId, generalLocation, exactLocation, lineLong, username]
    ); 
  } catch (error) {
    console.log("Error adding sighting: ", error); 
    res.status(400).json(error); 
  }
}); 

export const server = app.listen(PORT, () => {
  console.log(`Mwahahhahaha! Server running on port ${PORT}`);
});

export default app;