import Box from "@mui/material/Box"; 
import Container from "@mui/material/Container"; 
import Typography from "@mui/material/Typography";

const Header: React.FC = () => {
    const headerStyles = {
        color: "#000000", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        width: "100%",
        marginLeft: "20px",
        marginTop: "20px"
    }

    return (
        <Container>
        <Box sx={{...headerStyles}}>
            <Typography variant="h2">Character Tracker</Typography>
        </Box>
        </Container>
    ); 
}

export default Header; 