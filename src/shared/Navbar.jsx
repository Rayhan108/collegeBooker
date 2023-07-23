 import { Link } from 'react-router-dom';
import logo from'../assets/collegebooker-low-resolution-logo-black-on-transparent-background.png'

const Navbar = () => {


    const navRoutes = (
        <>
          <li>
            <Link className=" font-bold" to="/">Home</Link>
          </li>
          <li>
            <Link to="/colleges"  className=" font-bold">Colleges</Link>
          </li>
   
           <li> <Link to="/admission" className=" font-bold">Admission</Link>
          </li>
          <li>
            <Link to="/myCollege" className=" font-bold">My College</Link>
          </li> 
          <li>
            <Link to="/login" className=" font-bold ">Login</Link>
          </li> 
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10  rounded-full">
          <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2022/03/Male-Poses-Walking.jpg' className='' />
        </div>
      </label>
        </>
      );

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navRoutes}
            </ul>
          </div>
          <img src={logo} className="btn btn-ghost normal-case text-xl w-36"/>
        </div>
        <div className="navbar-center hidden lg:flex navbar-end">
          <ul className="menu menu-horizontal px-1">
          {navRoutes}
          </ul>
      

        </div>
      </div>
    );
};

export default Navbar;