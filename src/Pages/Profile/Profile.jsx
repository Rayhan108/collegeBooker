import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ProfileContent from "./ProfileContent";


const Profile = () => {
    const {user}=useContext(AuthContext)
    // console.log(user);
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/allAppliedColleges?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[user?.email])
    console.log(data);
    return (
       <div className="stats shadow mt-64 flex justify-center items-center">
         <div className="stat">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div className="stat-title">Applied College</div>
          <div className="stat-value text-primary ">{data? data?.length:0}</div>
          
        </div>
        {
            data?.map((d,i)=><ProfileContent key={i} d={d}></ProfileContent>)
        }
       </div>
    );
};

export default Profile;