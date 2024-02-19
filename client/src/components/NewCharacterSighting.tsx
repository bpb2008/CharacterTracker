import Box from "@mui/material/Box"; 
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
        <Box sx={{marginTop: "20px"}}>
            <FormControl >
                <InputLabel>Individual Seen</InputLabel>
                <Select label="Individual Seen" sx={{margin: "10px"}} >
                    <MenuItem>Sorcerer Mickey</MenuItem>
                </Select>
                <Select sx={{margin: "10px"}} >
                    <MenuItem></MenuItem>
                </Select>
                <Select sx={{margin: "10px"}} >
                    <MenuItem></MenuItem>
                </Select>
                <TextField label="Your Username" sx={{margin: "10px"}} ></TextField>
                <FormLabel sx={{marginTop: "10px"}}>Was the line "long" (30 minutes or more)?</FormLabel>
                <RadioGroup row sx={{marginBottom: "10px"}}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" /> 
                    <FormControlLabel value="yes" control={<Radio />} label="No" /> 
                </RadioGroup>
                <Button variant="outlined">Submit New Sighting</Button>
            </FormControl>
        </Box>
    )
}

export default NewCharacterSighting; 