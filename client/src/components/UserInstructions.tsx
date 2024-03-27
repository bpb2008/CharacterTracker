import Box from "@mui/material/Box"; 
import Typography from "@mui/material/Typography";

const UserInstructions: React.FC = () => {
  return (
    <Box sx={{width: "500px", marginLeft: "50px"}}>
          <Typography variant="h4" sx={{marginBottom: "15px"}}>How this works:</Typography>
          <Typography sx={{marginBottom: "10px"}}><strong>"Add New Character"</strong> if you want to add a character "species" that is not already found on the list. When you think "character" or "species", think Mickey Mouse.</Typography>
          <Typography sx={{marginBottom: "10px"}}><strong>"Add New Individual"</strong> if you want to add a new version of a character, such as "Sorcerer Mickey".</Typography>
          <Typography><strong>"Add A Character Sighting"</strong> if you've seen a character out in the wild and would like to document it.</Typography>
    </Box>
  );
};

export default UserInstructions;
