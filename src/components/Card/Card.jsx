import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({d}) => {

    const {image,_id,name,admission_dates,events,research_history,sports}=d;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className="h-[250px]" src={image}/></figure>
        <div className="card-body flex flex-row">
        <div>
        <h2 className="card-title badge badge-outline">
           {name}
           
          </h2>
          <p className="font-semibold font-xl">Admission Date</p>
          <p>{admission_dates}</p>
          <Link to={`/details/${_id}`}>
          
              <button className="btn  mt-3 btn-primary hover:-hue-rotate-90 bg-gradient-to-r from-cyan-500 to blue-900">
                {" "}
                <span className="text-white  font-bold">
                  View Details{" "}
                </span>{" "}
                <span className=" ">
                  <AiOutlineArrowRight size={25}></AiOutlineArrowRight>
                </span>{" "}
              </button>
            </Link>
        </div>
        <div>
<p className="font-semibold font-xl">Publications:{research_history?.total_publications}</p>
<p className="font-semibold font-xl">Total events:{events?.length}</p>
<p className="font-semibold font-xl">Total sports:{sports?.teams?.length}</p>
        </div>
        </div>
      </div>
    );
};

export default Card;