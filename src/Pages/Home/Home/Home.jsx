
import About from "../../../components/About/About";
import Contact from "../../../components/Contact/Contact";
import Gallary from "../../../components/Gallary/Gallary";
import Header from "../../../components/Header/Header";


const Home = () => {
    return (
        <div>
         
           <Header/>
           <Gallary/>
         <About/>
         <Contact/>
        </div>
    );
};

export default Home;