

const ResearchLinks = () => {
    return (
        <div className="overflow-x-auto mb-10 mt-10">
        <h1 className="text-5xl font-bold text-center p-5 font-mono text-black mb-5  mt-10">
            Research Paper Links
          </h1>
          <p className="font-5xl  font-extrabold border-b-8  border-dimPurple text-black mb-10"></p>
    
  <table className="table text-center ">
    {/* head */}
    <thead className=" text-xl font-bold">
      <tr>
        <th>S?L</th>
        <th>College Name</th>
        <th>Student Name</th>
        <th>Links</th>
      
      </tr>
    </thead>
    <tbody>
    <tr>
        <th>{1}</th>
        <td>
       SSNIC
        </td>
        <td>
          MD.Rayhan Shorker
        </td>
        <td>
            <a href="https://www.scopus.com/authid/detail.uri?authorId=57211681410">Link</a>
        
        </td>
       

      </tr>
    <tr>
        <th>{2}</th>
        <td>
       NDC
        </td>
        <td>
          MD.Rayhan Sheikh
        </td>
        <td>
            <a href="https://www.scopus.com/authid/detail.uri?authorId=57211681410">Link</a>
        
        </td>
       

      </tr>
    <tr>
        <th>{3}</th>
        <td>
       DCC
        </td>
        <td>
          MD.Shoriful Islam
        </td>
        <td>
            <a href="https://www.scopus.com/authid/detail.uri?authorId=57211681410">Link</a>
        
        </td>
       

      </tr>
   
    </tbody>
  </table>
</div>
    );
};

export default ResearchLinks;