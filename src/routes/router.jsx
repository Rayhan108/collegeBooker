import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Details/Details";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home/>,
        },
        {
            path:"/details/:id",
            element:<Details/>
        }
      ]
    },
  ]);

export default router;