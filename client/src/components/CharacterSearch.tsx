import Box from "@mui/material/Box"; 
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
        <Box sx={{marginBottom: "15px", padding: "10px", display: "flex", flexDirection: "row"}}>
          <TextField 
          onChange={(e) => setSearchName(e.target.value)} 
          value={searchName}
          variant="outlined" 
          label="E.g. 'Mickey Mouse' or 'Epcot'" 
          sx={{ width: "600px", marginRight: "10px"}}
          /> 
          <Button variant="contained" onClick={handleSearch} sx={{height: "50px", width: "200px"}} ><SearchIcon sx={{marginRight: "10px" }} />Search</Button>
          <Box>
            <SearchResults /> 
          </Box>
      </Box>
    ); 
}

export default CharacterSearch; 