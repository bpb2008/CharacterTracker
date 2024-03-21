import { useRouteError } from "react-router-dom";
import Box from "@mui/material/Box"; 
import Typography from "@mui/material/Typography";

const ErrorPage: React.FC = () => {
    interface RouteError {
        statusText?: string, 
        message?: string, 
    }

    const error = useRouteError() as RouteError; 
    console.error(error); 

    return (
        <Box>
            <Typography variant="h1">Oops!</Typography>
            <Typography>Sorry, an unexpected error has occured.</Typography>
            <Typography>{error.statusText || error.message}</Typography>
        </Box>
    ); 
} 

export default ErrorPage; 