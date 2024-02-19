import Box from "@mui/material/Box"; 
import Paper from "@mui/material/Paper"; 
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search"; 
import React, { useState } from "react"; 
import SearchResults from "./SearchResults";

const CharacterSearch: React.FC = () => {
    const [searchName, setSearchName] = useState("");

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:3001/characters/search?name=${searchName}`);
        if (!response.ok) {
            throw new Error("Error searching characters"); 
        }
        const data = await response.json(); 
        return data; 
        } catch (error) {
            console.error("Error searching characters: ", error); 
        }
    };

    return (
        <Box>
        <Paper sx={{marginBottom: "15px", padding: "10px"}}>
          <TextField 
          onChange={(e) => setSearchName(e.target.value)} 
          value={searchName}
          variant="outlined" 
          label="E.g. 'Mickey Mouse' or 'Epcot'" 
          sx={{display: "flex", flexDirection: "column", margin: "10px"}}
          /> 
          <Button variant="outlined" onClick={handleSearch} ><SearchIcon sx={{marginRight: "10px"}} />Search Character or Location</Button>
        </Paper>
        <Paper sx={{marginBottom: "15px"}} >
            <SearchResults /> 
        </Paper>
      </Box>
    ); 
}

export default CharacterSearch; 