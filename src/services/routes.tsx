import { createBrowserRouter } from "react-router-dom";
import GameDetails from "../pages/gameDetails";
import Homepage from "../pages/homepage";
import Layout from "../pages/layout";
import ErrorPage from "../pages/errorpage";

const router = createBrowserRouter([
    {   
        path: "/", 
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <Homepage/>},
            {path: "games/:slug", element: <GameDetails/>},
        ]
    },
]);

export default router;