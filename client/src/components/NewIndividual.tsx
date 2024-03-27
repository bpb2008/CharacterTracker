import Box from "@mui/material/Box";
import Container from "@mui/material/Container"; 
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup"; 
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState } from "react"; 

const NewIndividual: React.FC = () => {
    const [nickname, setNickname] = useState(""); 

    const handleSubmit = () => {

    }

    return (
        <Container sx={{display: "flex", flexDirection: "column"}}>
            <Box sx={{marginLeft: "200px", marginTop: "15px", marginBottom: "30px", marginRight: "50px"}}>
                <Typography>Enter the nickname of a new individual character below. Nicknames are based on a character's specialty outfit. For example, a nickname for Mickey Mouse in his Sorcerer Mickey outfit would be "Sorcerer Mickey"</Typography>
            </Box>
            <Box sx={{marginLeft: "200px"}}>
            <form onSubmit={handleSubmit}>
                <FormGroup sx={{ display: "flex", flexDirection: "column"}}>
                <TextField
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                label="Enter character nickname"
                sx={{width: "300px"}}
                 /> 
                <Select  sx={{width: "300px", marginTop: "15px", marginBotom: "10px"}}></Select>
                <Button variant="contained" sx={{width: "100px", height: "50px", marginTop: "10px"}} >Submit</Button>
                </FormGroup>
            </form>
            </Box>
        </Container>
    )
}

export default NewIndividual; 