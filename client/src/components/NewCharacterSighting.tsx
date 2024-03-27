import Box from "@mui/material/Box"; 
import Container from "@mui/material/Container"; 
import FormGroup from "@mui/material/FormGroup"; 
import Typography from "@mui/material/Typography"; 
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select/Select";
import InputLabel from "@mui/material/InputLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio"; 
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const NewCharacterSighting: React.FC = () => {
    return (
        <Container>
            <Box sx={{marginLeft: "200px", marginBottom: "50px", marginTop: "20px", marginRight: "50px"}}>
                <Typography>Have you seen a character out and about and want to document
                    it? Let us know the details inthe form below. 
                </Typography>
            </Box>
            <Box sx={{marginLeft: "200px"}}>
            <form>
            <FormGroup sx={{ display: "flex", flexDirection: "column"}}>
            <FormControl >
                <InputLabel>Individual Seen</InputLabel>
                <Select label="Individual Seen" sx={{marginBottom: "10px", width: "300px"}} >
                    <MenuItem>Sorcerer Mickey</MenuItem>
                </Select>
                <Select sx={{marginBottom: "10px", width: "300px"}} >
                    <MenuItem></MenuItem>
                </Select>
                <Select sx={{marginBottom: "10px", width: "300px"}} >
                    <MenuItem></MenuItem>
                </Select>
                <TextField label="Your Username" sx={{marginBottom: "10px", width: "300px"}} ></TextField>
                <FormLabel sx={{marginTop: "10px"}}>Was the line "long" (30 minutes or more)?</FormLabel>
                <RadioGroup row sx={{marginBottom: "10px"}}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" /> 
                    <FormControlLabel value="yes" control={<Radio />} label="No" /> 
                </RadioGroup>
                <Button variant="contained" sx={{width: "100px", height: "50px"}} >Submit</Button>
            </FormControl>
            </FormGroup>
            </form>
            </Box>
        </Container>
    )
}

export default NewCharacterSighting; 