import Box from "@mui/material/Box"; 
import TextField from "@mui/material/TextField";
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
        <Box sx={{margin: "10px"}}>
            <Box sx={{width: "300px", marginLeft: "150px", marginTop: "15px", marginBottom: "15px"}}>
            <Typography>Enter the common name of the character below. For example, if you've seen Mickey Mouse, no matter what outfit he is wearing, his generic name "Mickey Mouse" should be entered here.</Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <div className="form">
                <TextField 
                onChange={(e) => setCharacter(e.target.value)}
                sx={{margin: "10px"}} 
                value={character} 
                label="Enter Character Name"
                />
                <Button variant="outlined" >Submit New Character</Button>
                </div>
            </form>
        </Box>
    ); 
}

export default NewCharacter; 