import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../routes/ErrorPage";
import Index from "../routes/Index";
import About from "../routes/About";
import NewCharacter from "../components/NewCharacter";
import NewIndividual from "../components/NewIndividual";
import NewCharacterSighting from "../components/NewCharacterSighting";


const router = createBrowserRouter([
    {
        path: "/", 
        element: <App />, 
        errorElement: <ErrorPage />, 
        children: [
            {
                errorElement: <ErrorPage />, 
                children: [
                    {index: true, element: <Index /> }, 
                    {
                        path: "/about",
                        element: <About />,
                    },
                    {
                        path: "/NewCharacter",
                        element: <NewCharacter />,
                    }, 
                    {
                        path: "/NewIndividual",
                        element: <NewIndividual />, 
                    }, 
                    {
                        path: "/NewSighting", 
                        element: <NewCharacterSighting /> 
                    }
                ]
            }
        ]
    }
]);

export default router; 