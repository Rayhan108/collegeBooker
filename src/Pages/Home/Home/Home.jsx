
import { useEffect, useState } from "react";
import About from "../../../components/About/About";
import CollegeCard from "../../../components/Card/CollegeCard";

import Contact from "../../../components/Contact/Contact";
import Gallary from "../../../components/Gallary/Gallary";
import Graduates from "../../../components/Graduates/Graduates";
import Header from "../../../components/Header/Header";
import SearchBar from "../../../components/SearchBar/SearchBar";


const Home = () => {
    const [collegeData,setCollegeData] = useState([])
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
        fetch('http://localhost:5000/allColleges')
        .then(res=>res.json())
        .then(data=>setCollegeData(data))
    },[])
    const handleSearch = () => {
        fetch(`http://localhost:5000/colleges/searchbyName/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
          
            setCollegeData(data);
          });
      };
    return (
        <div>
         <SearchBar handleSearch={handleSearch} setSearchText={setSearchText}/>
           <Header/>
           <CollegeCard collegeData={collegeData}/>
           <Gallary/>
           <Graduates/>
         <About/>
         <Contact/>
        </div>
    );
};

export default Home;