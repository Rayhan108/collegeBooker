// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// import required modules
import { EffectCoverflow, Pagination,Navigation,Scrollbar,Autoplay } from 'swiper/modules';
const Gallary = () => {
  return (
    <div className="bg-purple-200">
      <div
      className="space-y-10 mb-10 p-10 "
     
    >
      <h1 className="text-center font-extrabold text-5xl">Gallary</h1>
      <p className="font-5xl font-poppins font-extrabold border-b-8  border-purple-100  mb-10"></p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar,EffectCoverflow,Autoplay]}
        effect={"coverflow"}
       autoplay={true}
        grabCursor={true}
      
        slidesPerView="3"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            className=""
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            className=""
            src="https://static01.nyt.com/images/2020/03/14/upshot/14up-colleges-remote/14up-colleges-remote-videoSixteenByNineJumbo1600.jpg"
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            className=""
            src="https://www.thoughtco.com/thmb/PCVPjqDcfiY4az_kycvn-EJA-e8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg"
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            className=""
            src="https://www.universitymagazine.ca/wp-content/uploads/2020/10/California-University-of-Pennsylvania.jpg"
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            className=""
            src="https://www.usnews.com/dims4/USNEWS/9ee7419/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fb1%2Ffdcc4d127923253199c5013044c835%2F2019Summer-_Old_Main_Drone-0104.jpg"
            alt="First slide"
          />
        </SwiperSlide>
        
      
      </Swiper>
    </div>
    </div>
  );
};

export default Gallary;
