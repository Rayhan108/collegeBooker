import Card from "./Card";


const CollegeCard = ({collegeData}) => {
  
    return (
    <>
    
    <h1 className="text-5xl font-bold text-center p-5 font-mono text-black mb-5  mt-10">
        Colleges
      </h1>
      <p className="font-5xl  font-extrabold border-b-8  border-dimPurple text-black mb-10"></p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 mb-10">
        {
                collegeData.map((d,idx)=><Card key={idx} d={d}></Card>)
            }
        </div>
    </>
    );
};

export default CollegeCard;