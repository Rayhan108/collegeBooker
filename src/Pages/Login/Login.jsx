import { Link, useLocation, useNavigate } from "react-router-dom";
import {FaGoogle } from "react-icons/fa";
import { useContext, useRef, useState } from "react";

import { GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {

    const { login,googleLogin,setUser,resetPass } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(""); 
     const emailRef = useRef();
    const [success, setSuccess] = useState("");
    const location =useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const provider = new GoogleAuthProvider();
    // login with email & pass
    const handleLogin = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");
        // console.log(event);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
          .then((result) => {
            // eslint-disable-next-line no-unused-vars
            const loggedUser = result.user;
            // console.log(loggedUser);
            navigate(from)
            form.reset();
            Swal.fire({
                title: 'success!',
                text: 'Login Succesfull',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          })
          .catch((error) => {
            // console.log(error.message);
            setError(error.message);
          });
      };
    
// login with google
const handleGoogleLogin = () => {
    setError("");
    setSuccess("");
 
    googleLogin(provider)
      .then((result) => {
        const user = result.user;
        navigate(from)
        setUser(user);
        // console.log(user);
        Swal.fire({
            title: 'success!',
            text: 'Login Succesfull',
            icon: 'success',
            confirmButtonText: 'OK'
          })
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const sendResetPasswordEmail = () => {
    const email = emailRef.current.value;
    if(!email){
      toast.error('Provide your email to reset password');
      return;
    }
    resetPass(email)
    .then(()=>{
      toast.success('Password Reset mail send')
    })
    .catch(error=>{
      setError(error.message)
    })
  };
    return (
        <div className="mt-10 mb-10">
        <div className="hero-content">
         
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
         
         <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-5">Login</h1>
            <form onSubmit={handleLogin}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email"  ref={emailRef} name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={show ? "text":"password"} placeholder="password" name="password" className="input input-bordered" required />
          
              </div>
              <p className="mt-3" onClick={() => setShow(!show)}>
            <span className=" font-bold ">
              {show ? <span>Hide Password</span> : <span>Show Password</span>}
            </span>
          </p>
          <p>
            <small>
              Forget your Password?Please{" "}
              <Link
                onClick={sendResetPasswordEmail}
                className="text-blue-700 font-bold underline "
              >
                Reset
              </Link>
            </small>
          </p>
          <p className="text-green-700">
        {success}
        </p>
      <br />
      <p className="text-red-700 ">
        {error}
        </p>
              <div className="form-control mt-6">
                
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
           
     
            <p > <span className="font-semibold"> Did not have an Account?</span>  <Link className="text-orange-400 font-bold" to="/register">Register</Link></p>
            </div>
            <div className="text-center">
            <span className="text-gray-400">or</span>
          </div>
      <div className="mb-5 mx-auto mt-5">
      <button
           onClick={handleGoogleLogin}
           className=" px-6  py-3 btn btn-outline btn-primary rounded-md"
         >
          <FaGoogle className="text-blue-700 text-2xl mr-5"/> Sign in with Google
         </button>
      </div>
    
          </div>
        </div>
      </div>
    );
};

export default Login;