import { useEffect, useState } from "react";
import CollegeCard from "../../components/Card/CollegeCard";
import SearchBar from "../../components/SearchBar/SearchBar";


const Colleges = () => {
    const [data,setdata] = useState([])
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
        fetch('https://college-booker-server.vercel.app/allColleges')
        .then(res=>res.json())
        .then(data=>setdata(data))
    },[])
    const handleSearch = () => {
        fetch(`https://college-booker-server.vercel.app/colleges/searchbyName/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
          
            setdata(data);
          });
      };
    return (
        <div className="">
             <SearchBar handleSearch={handleSearch} setSearchText={setSearchText}/>
            <CollegeCard data={data}/>
        </div>
    );
};

export default Colleges;