import Container from "@mui/material/Container"; 
import Box from "@mui/material/Box"; 
import Typography from "@mui/material/Typography";

const About: React.FC = () => {
    return (
        <Container>
            <Box sx={{marginTop: "50px", marginLeft: "200px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <Typography>
                Are you a newbie to Walt Disney World or just need an easy way to remember 
                where and when your favorite characters are available to meet? Do you have a favorite "version" 
                of Mickey Mouse that that you specifically want to see on your vacation? This CharacterTracker 
                can help you! Search the names of your favorite characters to see the times and locations that 
                they appear in the parks and resorts. See a new or rare character that isn't in the usual roster? 
                You can add them to the database. Also, you can add your own character sightings and note whether 
                the line to meet the character was "long" (over 30 minute wait time) or not.
            </Typography>
            <Typography sx={{marginTop: "20px"}}>
            <strong>Note:</strong> This project is in no way endorsed by The Walt Disney Company. I don't own any rights 
            to any characters or control when they meet at the theme parks. I'm just a fan combining her 
            love of Disney with her love of coding!
            </Typography>
            </Box>
        </Container>
    ); 
}

export default About; 