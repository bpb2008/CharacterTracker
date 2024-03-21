import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box"; 
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"; 
import SearchIcon from "@mui/icons-material/Search"; 
import { Form } from "react-router-dom"; 

const Index: React.FC = () => {
    return (
        <Container>
            <Box sx={{ marginLeft: "200px", marginTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Box>
                    <Form>
                        <TextField variant="outlined" /> 
                        <Button variant="contained"><SearchIcon /></Button>
                    </Form>
                </Box>
                <Box sx={{marginTop: "20px"}}>
                <Typography>How this works:</Typography>
                <Typography>
                Click "Add New Character" if you want to add a character "species" 
                that is not already found on the list. When you think "character" or "species", 
                think Mickey Mouse. 
                </Typography>
                <Typography>
                Click "Add New Individual" if you want to add a new version of a character,
                such as "Sorcerer Mickey". 
                </Typography>
                <Typography>
                Click "Add A Character Sighting" if you've seen a character out in the wild
                and want to document it. 
                </Typography>
                </Box>
            </Box>
        </Container>
    ); 
}

export default Index; 