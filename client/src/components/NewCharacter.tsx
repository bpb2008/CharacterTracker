import Box from "@mui/material/Box"; 
import Container from "@mui/material/Container"; 
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup"; 
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"; 
import { useState } from "react"; 

const NewCharacter: React.FC = () => {
    const [character, setCharacter] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await fetch("http://localhost:3001/addNewCharacter", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json", 
                }, 
                body: JSON.stringify({ character }), 
            });
            
            if (!response.ok) {
                throw new Error("Failed to add new character");
            }

            await response.json();
            setCharacter(""); 
            //figure out how you want to display this data! It won't be here in this component. 

        } catch (error) {
            console.error("Oh boy! Error adding new character: ", error); 
        }
    }; 

    return (
        <Container>
            <Box sx={{ marginLeft: "200px", marginRight: "50px", marginTop: "15px", marginBottom: "50px"}}>
            <Typography>Enter the common name of the character below. For example, if you've seen Mickey Mouse, no matter what outfit he is wearing, his generic name "Mickey Mouse" should be entered here.</Typography>
            </Box>
            <Box sx={{marginLeft: "200px"}}>
            <form onSubmit={handleSubmit}>
                <FormGroup sx={{ display: "flex", flexDirection: "row"}}>
                <TextField 
                onChange={(e) => setCharacter(e.target.value)}
                sx={{marginRight: "10px", width: "300px"}} 
                value={character} 
                label="Enter Character Name"
                />
                <Button variant="contained" sx={{width: "100px", height: "50px"}} >Submit</Button>
                </FormGroup>
            </form>
            </Box>
        </Container>
    ); 
}

export default NewCharacter; 