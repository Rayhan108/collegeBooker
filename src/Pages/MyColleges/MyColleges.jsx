import { useContext, useEffect, useState } from "react";
import CollegesTable from "./CollegesTable";
import { AuthContext } from "../../Provider/AuthProvider";


const MyColleges = () => {
  const {user}=useContext(AuthContext)
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/allAppliedColleges?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[user?.email])
    return (
        <div className="mt-5 mb-10 p-5">

<h1 className="text-5xl font-bold text-center p-5 font-mono text-black mb-5  mt-10">
           My Applied Colleges
          </h1>
          <p className="font-5xl  font-extrabold border-b-8  border-dimPurple text-black mb-10"></p>
    

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         S/L
        </th>
        <th> College Name</th>
        <th>Research</th>
        <th>Sports</th>
        <th>Give Review</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
data?.map((d,i)=><CollegesTable key={i} d={d} i={i}></CollegesTable>)
    }
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default MyColleges;