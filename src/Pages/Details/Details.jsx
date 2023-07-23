import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  FaSpinner } from "react-icons/fa";
import {  BsCheck2All } from "react-icons/bs";
import Event from "../../components/Event/Event";

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
  <div className="">
{/* header */}
<div>
<img src={data?.image} alt="" className=' h-[450px] w-full '/>
</div>
<h1 className="text-3xl text-center font-semibold mb-10 mt-10">{data?.fullName}</h1>
{/* admission process */}
<h1 className="text-5xl font-bold text-center p-5 font-mono text-black mb-5  mt-10">
        Admission Proccess
      </h1>
      <p className="font-5xl  font-extrabold border-b-8  border-dimPurple text-black mb-10"></p>

      <div className="grid grid-cols-1 gap-5 ml-10 mb-10 ">
        
{
    data?.sports?.admission_procedure?.map((d,i)=><p key={i} d={d}>
        <span className="text-2xl font-thin text-semibold flex hover:bg-gray-300 p-5 rounded-xl"><BsCheck2All className="mr-3 text-green-700" size={50}/> {d}</span>
    </p>)
}

</div>
{/* event details */}
<h1 className="text-5xl font-bold text-center p-5 font-mono text-black mb-5  mt-10">
    Event Details
      </h1>
      <p className="font-5xl  font-extrabold border-b-8  border-dimPurple text-black mb-10"></p>
      <div className="grid md:grid-cols-3 gap-5 ml-20 mb-10">
    {
        data?.events?.map((e,i)=><Event key={i} e={e}></Event>)
    }
</div>
{/* research work */}
<h1 className="text-5xl font-bold text-center p-5 font-mono text-black mb-5  mt-10">
    Research Work
      </h1>
      <p className="font-5xl  font-extrabold border-b-8  border-dimPurple text-black mb-10"></p>
      <h1 className="text-3xl font-semibold font-mono text-center mb-8">Total Publications:{data?.research_history?.total_publications}</h1>
      <h1 className="text-3xl font-semibold  text-center mb-8">Top Research Areas</h1>
      <div className="grid md:grid-cols-3 gap-5 ml-10 mb-10 ">
{
    data?.research_history?.top_research_areas?.map((d,i)=><p key={i} d={d}>
        <span className="text-2xl font-thin text-semibold flex hover:bg-gray-300 p-5 rounded-xl"><BsCheck2All className="mr-3 text-green-700" size={50}/> {d}</span>
    </p>)
}

</div>
{/* sports */}
<h1 className="text-5xl font-bold text-center p-5 font-mono text-black mb-5  mt-10">
    Sports
      </h1>
      <p className="font-5xl  font-extrabold border-b-8  border-dimPurple text-black mb-10"></p>
      <div className="grid md:grid-cols-3 gap-5 ml-20 mb-10">
    {
        data?.sports?.teams?.map((e,i)=><Event key={i} e={e}></Event>)
    }
</div>
</div>
        }
      </>
       
    );
};

export default Details;