import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CollegesTable = ({d,i}) => {
   
    const [data, setData] = useState();
    useEffect(() => {
      fetch(`http://localhost:5000/colleges/${d?.collegeId}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
         
        });
    }, [d?.collegeId]);
    // console.log(data);

    return (
    <>
        <tr>
        <th>
         {i+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={data?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{data?.name}</div>
              <div className="text-sm opacity-50">{data?.admission_dates}</div>
            </div>
          </div>
        </td>
        <td>
         Total Publications
          <br/>
          <span className="badge badge-ghost badge-sm"> {data?.research_history?.total_publications}</span>
        </td>
        <td>{data?.sports?.teams?.length}</td>
        <th>
            <Link to={`/reviews/${d?.collegeId}`}>
            <button className="btn btn-ghost btn-sm"> Give Review</button>
            </Link>
          
        </th>
      </tr>
    </>
  
    );
};

export default CollegesTable;