import Container from "@mui/material/Container";
import Box from "@mui/material/Box"; 
import CharacterSearch from "../components/CharacterSearch";
import UserInstructions from "../components/UserInstructions";

const Index: React.FC = () => {
    return (
        <Container>
            <Box sx={{ marginLeft: "200px", marginTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <CharacterSearch />
                <Box sx={{marginTop: "20px"}}>
                <UserInstructions /> 
                </Box> 
            </Box>
        </Container>
    ); 
}

export default Index; 