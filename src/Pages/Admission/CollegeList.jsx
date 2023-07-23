import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CollegeList = () => {
    const [data,setdata] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/allColleges')
        .then(res=>res.json())
        .then(data=>setdata(data))
    },[])
    return (
        <div>
               <h1 className="text-5xl font-bold text-center p-5 font-mono text-black mb-5  mt-10">
        College List
      </h1>
      <p className="font-5xl  font-extrabold border-b-8  border-dimPurple text-black mb-10"></p>
      <table className="table-auto mb-10 mx-auto text-center w-1/2">
          <thead className="bg-primary text-white hover:-hue-rotate-90 bg-gradient-to-r from-red-700 to green-900">
            <tr>
              <th className="">S/L</th>
              <th className="px-4 py-2">College Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((c, idx) => (
              <tr key={c?._id}>
                <td className="border text-center">{idx + 1}</td>
                <td className="border text-xl font-bold px-4 py-2">
                  <Link to={`/admissionForm/${c?._id}`}>
                    {c?.fullName}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
};

export default CollegeList;