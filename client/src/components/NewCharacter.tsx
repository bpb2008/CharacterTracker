import Box from "@mui/material/Box"; 
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const NewCharacter: React.FC = () => {
    return (
        <Box sx={{margin: "10px"}}>
            <form>
                <div className="form">
                <TextField sx={{margin: "10px"}} />
                <Button variant="outlined" >Submit New Character</Button>
                </div>
            </form>
        </Box>
    ); 
}

export default NewCharacter; 