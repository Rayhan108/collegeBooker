import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Details/Details";
import Colleges from "../Pages/Colleges/Colleges";
import CollegeList from "../Pages/Admission/CollegeList";
import AdmissionForm from "../Pages/Admission/AdmissionForm";


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
        },
        {
            path:"/colleges",
            element:<Colleges/>
        },
        {
            path:"/admission",
            element:<CollegeList/>
        },
        {
            path:"/admissionForm/:id",
            element:<AdmissionForm/>
        },
        {
            path:"/myCollege",
            element:<AdmissionForm/>
        },
      ]
    },
  ]);

export default router;