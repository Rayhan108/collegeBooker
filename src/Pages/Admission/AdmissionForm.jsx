import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AdmissionForm = () => {
  const { id } = useParams();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newApply = { ...data, collegeId: id };
    fetch("http://localhost:5000/applyColleges", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newApply),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Apply Successful!", "", "success");
          reset();
        }
      });
  };

  return (
    <>
      <div className="w-full mb-10 mx-auto max-w-xl">
        <h2 className="text-2xl text-center font-bold mb-4">Admission Form</h2>
        <p className="font-5xl font-extrabold border-b-8 border-dimPurple text-black mb-10"></p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Candidate Name
              </label>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Candidate Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Name"
                  />
                )}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Candidate Email
              </label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Candidate Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Email"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="candidatePhone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Candidate Phone number
              </label>
              <Controller
                name="candidatePhone"
                control={control}
                rules={{ required: "Candidate Phone number is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Phone number"
                  />
                )}
              />
              {errors.candidatePhone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.candidatePhone.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Address
              </label>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                rules={{ required: "Address is required" }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="Address"
                    rows="3"
                  />
                )}
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Date of Birth
              </label>
              <Controller
                name="dateOfBirth"
                control={control}
                defaultValue=""
                rules={{ required: "Date of Birth is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="date"
                  />
                )}
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Image
              </label>
              <Controller
                name="image"
                control={control}
                defaultValue=""
                rules={{ required: "Image is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    className="appearance-none w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="link"
                    placeholder="Enter image link"
                  />
                )}
              />
              {errors.image && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button
              type="submit"
              className="btn hover:-hue-rotate-90 text-black btn-primary w-full bg-gradient-to-r via-purple-300 from-cyan-500 to-purple-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AdmissionForm;
