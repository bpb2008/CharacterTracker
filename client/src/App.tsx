import Container from "@mui/material/Container"; 
import Box from "@mui/material/Box"; 
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper"; 
import Button from "@mui/material/Button"; 
import UserInstructions from "./components/UserInstructions";
import { useState } from "react";
import './App.css'
import NewCharacter from "./components/NewCharacter";
import NewIndividual from "./components/NewIndividual";
import NewCharacterSighting from "./components/NewCharacterSighting";
import CharacterSearch from "./components/CharacterSearch";

function App() {
  const [newCharacterButtonClicked, setNewCharacterButtonClicked] = useState<boolean>(false); 
  const [newIndividualButtonClicked, setNewIndividualButtonClicked] = useState<boolean>(false); 
  const [newSightingButtonClicked, setNewSightingButtonClicked] = useState<boolean>(false); 

  const handleAddCharacter = () => {
    setNewCharacterButtonClicked(true); 
    setNewIndividualButtonClicked(false);
    setNewSightingButtonClicked(false);
  }

  const handleAddIndividual = () => {
    setNewIndividualButtonClicked(true); 
    setNewCharacterButtonClicked(false); 
    setNewSightingButtonClicked(false); 
  }

  const handleAddSighting = () => {
    setNewSightingButtonClicked(true); 
    setNewIndividualButtonClicked(false); 
    setNewCharacterButtonClicked(false); 
  }

  return (
    <Container sx={{backgroundColor: "#F20505", width: "100%", padding: "20px"}}>
      <Box>
        <Paper sx={{marginBottom: "15px", marginTop: "15px"}}>
        <Typography variant="h2">Character Tracker</Typography>
        </Paper>
      </Box>
      <CharacterSearch />
      <Box sx={{display: "flex", flexDirection: "column", flexWrap: "wrap"}}>
        <Paper sx={{padding: "15px"}}>
          <Button variant="outlined" sx={{padding: "10px", margin: "5px"}} onClick={handleAddCharacter}>Add New Character</Button>
          <Button variant="outlined" sx={{padding: "10px", margin: "5px"}} onClick={handleAddIndividual}>Add New Individual</Button>
          <Button variant="outlined" sx={{padding: "10px", margin: "5px"}} onClick={handleAddSighting}>Add A Character Sighting</Button>
          {newCharacterButtonClicked && <NewCharacter />}
          {newIndividualButtonClicked && <NewIndividual />}
          {newSightingButtonClicked && <NewCharacterSighting />}
          {!newCharacterButtonClicked && !newIndividualButtonClicked && !newSightingButtonClicked && <UserInstructions />}
        </Paper>
      </Box>
    </Container>
  )
}

export default App
