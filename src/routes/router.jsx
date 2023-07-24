import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Details/Details";
import Colleges from "../Pages/Colleges/Colleges";
import CollegeList from "../Pages/Admission/CollegeList";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import MyColleges from "../Pages/MyColleges/MyColleges";
import Reviews from "../Pages/Reviews/Reviews";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
            element:<MyColleges/>
        },
        {
            path:"/reviews/:id",
            element:<Reviews/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Registration/>
        },
      ]
    },
  ]);

export default router;