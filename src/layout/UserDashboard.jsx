import { FaHome, FaUser } from "react-icons/fa";

import { SiGoogleclassroom } from "react-icons/si";

import { NavLink, Outlet } from "react-router-dom";


const UserDashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side  ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content font-bold">
            {/* Sidebar content here */}
      
            <li><NavLink to="/dashboard"><FaUser></FaUser> Profile</NavLink> </li>
           
             
              
             <div className="divider"></div>
               <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                   
                   <li><NavLink to="/myCollege"><SiGoogleclassroom></SiGoogleclassroom> My Colleges</NavLink></li>
          
                   
          </ul>
        
        </div>
      </div>
    );
};

export default UserDashboard;