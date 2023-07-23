
import About from "../../../components/About/About";
import CollegeCard from "../../../components/Card/CollegeCard";

import Contact from "../../../components/Contact/Contact";
import Gallary from "../../../components/Gallary/Gallary";
import Graduates from "../../../components/Graduates/Graduates";
import Header from "../../../components/Header/Header";
import SearchBar from "../../../components/SearchBar/SearchBar";


const Home = () => {
    return (
        <div>
         <SearchBar/>
           <Header/>
           <CollegeCard/>
           <Gallary/>
           <Graduates/>
         <About/>
         <Contact/>
        </div>
    );
};

export default Home;