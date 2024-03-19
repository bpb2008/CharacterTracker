import React from "react";
import { Link } from "react-router-dom"; 
import Box from "@mui/material/Box"; 
import Drawer from "@mui/material/Drawer"; 
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";


const NavBar: React.FC = () => {

    return (
            <Box>
                <Drawer
                variant="permanent"
                >
                    <List>
                        <ListItemButton component={Link} to="/">
                            <ListItemText primary="Home">Home</ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to="/about">
                            <ListItemText primary="About">About</ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to="/NewCharacter">
                            <ListItemText primary="Add New Character">Add New Character</ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to="/NewIndividual">
                            <ListItemText primary="Add New Individual">Add New Individual</ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to="/NewSighting">
                            <ListItemText primary="Add New Sighting">Add New Sighting</ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to="https://github.com/bpb2008/CharacterTracker">
                            <ListItemText primary="View on GitHub">View on GitHub</ListItemText>
                        </ListItemButton>
                    </List>
                </Drawer>
            </Box>
    )
}

export default NavBar; 