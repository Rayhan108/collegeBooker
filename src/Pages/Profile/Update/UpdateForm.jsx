import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateForm = ({d,id}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location =useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/dashboard";
    const onSubmit = data => {
     
      fetch(`https://college-booker-server.vercel.app/update/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
        
              if(data.modifiedCount>0){
                navigate(from, { replace: true })
                  Swal.fire({
            title: 'success!',
            text: 'Update Succesfull',
            icon: 'success',
            confirmButtonText: 'Cool'
          })}
           
      });

          
    }
    return (
        <div className=" min-h-screen bg-base-200">
          <div className="hero-content ">
            
            <div className="card w-full max-w-3xl shadow-2xl bg-base-100">
            <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} >
            {errors.exampleRequired && <span>This field is required</span>}
                <h1 className="text-center font-extrabold mt-5 mb-5 text-3xl">Update Profile</h1>
           
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Candidate Name</span>
                  </label>
                  <input type="text" placeholder="Name"  defaultValue={d?.name}  {...register("name", { required: true })} className="input input-bordered" />
                  
                </div>
             
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Candidate Email</span>
                  </label>
                  <input type="text" placeholder="Email" defaultValue={d?.email} {...register("email", { required: true })} className="input input-bordered" />
                  
                </div>
            
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input type="text" placeholder="Address" defaultValue={d?.address}  {...register("address", { required: true })} className="input input-bordered" />
                  
                </div>
              
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Update</button>
                </div>
            </form>
              </div>
            </div>
          </div>
        </div>
    );
};

export default UpdateForm;