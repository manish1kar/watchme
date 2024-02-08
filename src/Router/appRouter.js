import { createBrowserRouter } from "react-router-dom";
import WatchPage from "../components/WatchPage";
import MainContent from "../components/MainContent";
import App from "../App";

const appRouter = createBrowserRouter([{
    path:"/",
    element: <App/>,
    children : [
        {
            path : "/watch",
            element : <WatchPage/>
        },
        {
            path : "/",
            element : <MainContent/>
        }
    ],
    errorElement:<h1>Wrong Path Bro...</h1>
}])

export default appRouter;