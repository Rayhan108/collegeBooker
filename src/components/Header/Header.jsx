import img from '../../assets/pexels-engin-akyurt-2943603.jpg'

const Header = () => {
    return (
        <div>
                <header className="relative bg-cover bg-center h-20 md:h- xl:h-96">

      <img src={img} alt="" className='absolute h-[350px] w-full '/>
      <div className="flex flex-col justify-center items-center h-full text-white relative    lg:top-30">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 text-center">
          CollegeBooker
        </h1>
        <p className="text-lg md:text-xl xl:text-2xl mb-8 max-w-lg text-center">
          Your one-stop solution for hassle-free college bookings.Choose your favourite college
        </p>
        <button className="px-6 py-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition duration-300 ease-in-out">
          Book Now
        </button>
      </div>
    </header>
 

        </div>
    );
};

export default Header;