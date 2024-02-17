import Container from "@mui/material/Container"; 
import Box from "@mui/material/Box"; 
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper"; 
import Button from "@mui/material/Button"; 
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search"; 
import UserInstructions from "./components/UserInstructions";
import { useState } from "react";
import './App.css'
import NewCharacter from "./components/NewCharacter";
import NewIndividual from "./components/NewIndividual";
import NewCharacterSighting from "./components/NewCharacterSighting";

function App() {
  const [newCharacterButtonClicked, setNewCharacterButtonClicked] = useState<boolean>(false); 
  const [newIndividualButtonClicked, setNewIndividualButtonClicked] = useState<boolean>(false); 
  const [newSightingButtonClicked, setNewSightingButtonClicked] = useState<boolean>(false); 

  const handleAddCharacter = () => {
    setNewCharacterButtonClicked(true); 
  }

  const handleAddIndividual = () => {
    setNewIndividualButtonClicked(true); 
  }

  const handleAddSighting = () => {
    setNewSightingButtonClicked(true); 
  }

  return (
    <Container sx={{backgroundColor: "#F20505", width: "100%", padding: "20px"}}>
      <Box>
        <Paper sx={{marginBottom: "15px", marginTop: "15px"}}>
        <Typography variant="h2">Character Tracker</Typography>
        </Paper>
      </Box>
      <Box>
        <Paper sx={{marginBottom: "15px", padding: "10px"}}>
          <TextField variant="outlined" label="E.g. 'Mickey Mouse' or 'Epcot'" sx={{display: "flex", flexDirection: "column", margin: "10px"}}/> 
          <Button variant="outlined" ><SearchIcon sx={{marginRight: "10px"}} />Search Character or Location</Button>
        </Paper>
      </Box>
      <Box>
        <Paper sx={{marginBottom: "15px"}}>
          <Typography>I guess search results could show up here?</Typography>
        </Paper>
      </Box>
      <Box sx={{display: "flex", flexDirection: "column", flexWrap: "wrap"}}>
        <Paper sx={{padding: "15px"}}>
          <Button variant="outlined" sx={{padding: "10px", margin: "5px"}} onClick={handleAddCharacter}>Add New Character</Button>
          <Button variant="outlined" sx={{padding: "10px", margin: "5px"}} onClick={handleAddIndividual}>Add New Individual</Button>
          <Button variant="outlined" sx={{padding: "10px", margin: "5px"}} onClick={handleAddSighting}>Add A Character Sighting</Button>
          {newCharacterButtonClicked ? (<NewCharacter />) : (<UserInstructions />) || newIndividualButtonClicked ? (<NewIndividual />) : (<UserInstructions />) || newSightingButtonClicked ? (<NewCharacterSighting />) : (<UserInstructions />)}
        </Paper>
      </Box>
    </Container>
  )
}

export default App
