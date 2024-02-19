import Box from "@mui/material/Box"; 
import Typography from "@mui/material/Typography";

const UserInstructions: React.FC = () => {
  return (
    <Box sx={{width: "100$"}}>
          <Typography>How this works:</Typography>
          <Typography sx={{wordWrap: "break-word"}}>"Add New Character" if you want to add a character "species" that is not already found on the list. When you think "character" or "species", think Mickey Mouse.</Typography>
          <Typography>"Add New Individual" if you want to add a new version of a character, such as "Sorcerer Mickey".</Typography>
          <Typography>"Add A Character Sighting" if you've seen a character out in the wild and would like to document it.</Typography>
    </Box>
  );
};

export default UserInstructions;
