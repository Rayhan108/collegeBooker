// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// import required modules
import { EffectCube, Pagination,Autoplay } from 'swiper/modules';


const Graduates = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center p-5 font-mono text-black mb-5  mt-10">
    Graduates Gallary
      </h1>
      <p className="font-5xl  font-extrabold border-b-8  border-dimPurple text-black mb-10"></p>
            <Swiper
              modules={[EffectCube, Pagination,Autoplay]}
              pagination={true}
              autoplay={true}
       effect={'cube'}
       grabCursor={true}
       
       cubeEffect={{
         shadow: true,
         slideShadows: true,
         shadowOffset: 20,
         shadowScale: 0.94,
       }}
     
       className="mySwiper h-1/2 w-1/2"
      >
        <SwiperSlide>   <img
            style={{ width: "100%" }}
            className=""
            src="https://media.istockphoto.com/id/1066324992/photo/graduation-day.jpg?s=612x612&w=0&k=20&c=cleRpjTZbo430AbH-luZFYMMNqPwhwyTnFgWMbi_AiI="
            alt="First slide"
          /></SwiperSlide>
        <SwiperSlide>   <img
            style={{ width: "100%" }}
            className=""
            src="https://media.istockphoto.com/id/483228379/photo/graduating-class.jpg?s=612x612&w=0&k=20&c=tfxSle4u-YBfEQGEcm3JoGdyPsv5M8RnkNjmowQyogQ="
            alt="First slide"
          /></SwiperSlide>
        <SwiperSlide>   <img
            style={{ width: "100%" }}
            className=""
            src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-73532169-1677278119.jpg?crop=1xw:1xh;center,top&resize=980:*"
            alt="First slide"
          /></SwiperSlide>
        <SwiperSlide>   <img
            style={{ width: "100%" }}
            className=""
            src="https://images.squarespace-cdn.com/content/5a820ae0e45a7c13e22de06c/1523998997769-MN0ZDNTTDDQ54GJ9N926/a81a3-icyizeregraduationgroup.jpg?content-type=image%2Fjpeg"
            alt="First slide"
          /></SwiperSlide>
        <SwiperSlide>   <img
            style={{ width: "100%" }}
            className=""
            src="https://previews.123rf.com/images/michaeljung/michaeljung1403/michaeljung140300098/26738800-group-of-young-college-graduates-and-professor-at-graduation.jpg"
            alt="First slide"
          /></SwiperSlide>
      
      </Swiper>
        </div>
    );
};

export default Graduates;