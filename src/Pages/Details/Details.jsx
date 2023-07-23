import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  FaSpinner } from "react-icons/fa";

const Details = () => {
    const { id } = useParams();
    const [loader,setLoader]=useState(true)
      const [data, setData] = useState();
      useEffect(() => {
        fetch(`http://localhost:5000/colleges/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setLoader(false)
          });
      }, [id]);
    return (
      <>
        {
            loader?<div className="flex items-center justify-center h-32">
  <FaSpinner className="animate-spin text-white text-4xl" />
  </div>:
  <div>
  <h1 className="text-3xl">{data?.name}</h1>
</div>
        }
      </>
       
    );
};

export default Details;