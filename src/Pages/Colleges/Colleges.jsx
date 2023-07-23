import { useEffect, useState } from "react";
import CollegeCard from "../../components/Card/CollegeCard";
import SearchBar from "../../components/SearchBar/SearchBar";


const Colleges = () => {
    const [data,setdata] = useState([])
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
        fetch('http://localhost:5000/allColleges')
        .then(res=>res.json())
        .then(data=>setdata(data))
    },[])
    const handleSearch = () => {
        fetch(`http://localhost:5000/colleges/searchbyName/${searchText}`)
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