const About = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center p-5 font-mono text-black mb-5  mt-10">
        About Us
      </h1>
      <p className="font-5xl  font-extrabold border-b-8  border-dimPurple text-black mb-10"></p>

      <div
        className={`xl:mt-12 flex md:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <div className="text-center md:mt-16 mt-1  md:w-1/3">
          <img
            className="w-full  max-w-lg mt-10 lg:mt-0"
            src="https://media.istockphoto.com/id/675073328/vector/admission-concept-on-keyboard-button-3d-rendering.jpg?s=612x612&w=0&k=20&c=rsDToN9NseYiS5WEw48w6J_Ll4eWafgbeBwgml5Q254="
            alt=""
          />
        </div>

        <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl md:w-1/2 my-5">
          <div className="p-3 leading-6 ">
            <p className="text-black  font-serif ">
              At CollegeBooker, we are dedicated to revolutionizing the way
              college bookings are made. Our platform offers a seamless and
              hassle-free experience for reserving various college facilities
              and services. From booking event venues to scheduling campus
              tours, we strive to provide a comprehensive solution for all your
              college-related needs.Our team comprises passionate individuals
              who are committed to enhancing your college experience. By
              leveraging cutting-edge technology and user-friendly design, we
              aim to make the booking process efficient and enjoyable.
            </p>
            <p className="mt-3 text-black  font-serif">
              At CollegeBooker, we understand the importance of creating
              unforgettable memories during your college journey. Our mission is
              to simplify the process of securing college resources, allowing
              you to focus on what truly matters - making the most of your
              academic and extracurricular pursuits.Join us in this exciting
              journey as we redefine college bookings and empower students and
              staff alike. Welcome to CollegeBooker, where convenience meets
              excellence.
            </p>

            <button className="btn hover:-hue-rotate-90  text-black btn-primary bg-gradient-to-r via-purple-300 from-cyan-500 to to-purple-800">
              Contact Us{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
