import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider"

const ProfileContent = ({d}) => {
    const {user}=useContext(AuthContext)
    return (
        < >
  
       
        
        <div className="stat">
          
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Payment done</div>
          <div className="stat-desc text-secondary">
            <button className="btn btn-sm mt-3">Edit Profile</button>
          </div>
        </div>

        <div className="stat">
        <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
            <p>{user?.displayName}</p>
          </div>
          <div className="stat-title">Contact Info</div>
          <p className=" ">Email:{user?.email}</p>
          <p className=" ">Phone:{d?.candidatePhone}</p>
          <p className="stat-desc">Address:{d?.address}</p>
        </div>
        
     
        
      </>
    );
};

export default ProfileContent;