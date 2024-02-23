import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState } from "react"; 

const NewIndividual: React.FC = () => {
    const [nickname, setNickname] = useState(""); 

    const handleSubmit = () => {

    }

    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <Box sx={{width: "300px", marginLeft: "150px", marginTop: "15px", marginBottom: "15px"}}>
                <Typography>Enter the nickname of a new individual character below. Nicknames are based on a character's specialty outfit. For example, a nickname for Mickey Mouse in his Sorcerer Mickey outfit would be "Sorcerer Mickey"</Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <TextField
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                label="Enter character nickname"
                 /> 
                <Select></Select>
                <Button variant="outlined" >Submit New Individual</Button>
            </form>
        </Box>
    )
}

export default NewIndividual; 