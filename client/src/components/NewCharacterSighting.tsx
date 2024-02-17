import Box from "@mui/material/Box"; 
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select/Select";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio"; 

const NewCharacterSighting = () => {
    return (
        <Box>
            <form>
                <Select></Select>
                <Select></Select>
                <Select></Select>
                <TextField></TextField>
                <RadioGroup row>
                    <Radio />
                    <Radio /> 
                </RadioGroup>

                
            </form>
        </Box>
    )
}

export default NewCharacterSighting; 