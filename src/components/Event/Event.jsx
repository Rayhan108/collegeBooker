import {  TbMapPinPin } from "react-icons/tb";
import {  BsFillCalendarDateFill } from "react-icons/bs";
const Event = ({e}) => {
    const {name,date,location,description,coach,home_ground,achievements}=e;
    return (
        <div className="card w-96 bg-primary text-primary-content bg-gradient-to-r  from-purple-900 to green-900 ">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          
          <p>{description?description: achievements}</p>
          <p className="flex items-center ">
          {date?<>
            <BsFillCalendarDateFill className="mr-3" size={25}></BsFillCalendarDateFill> {date}
          </>:
          <>
          Field:{home_ground}
          </>
          }
            
            </p>
          <p className="flex items-center ">
            {
                location?<>
                
            <TbMapPinPin size={25} className="mr-3"></TbMapPinPin> {location}
                </>:
                <>
                Coach:{coach}
                </>
            }
            
            </p>
          
         
        </div>
      </div>
    );
};

export default Event;