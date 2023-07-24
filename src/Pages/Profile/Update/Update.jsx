import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../Provider/AuthProvider";
import UpdateForm from "./UpdateForm";
import { useParams } from "react-router-dom";


const Update = () => {
    const {id}=useParams();
    const {user}=useContext(AuthContext)
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/allAppliedColleges?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[user?.email])


 
    return (
        <div>
       {
        data?.map((d,i)=><UpdateForm key={i} d={d} id={id}></UpdateForm>)
       }
        </div>
    );
};

export default Update;