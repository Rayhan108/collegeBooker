import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const DisplayReviews = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allColleges")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-bold text-center p-5 font-mono text-black mb-5  mt-10">
        Reviews
      </h1>
      <p className="font-5xl  font-extrabold border-b-8  border-dimPurple text-black mb-10"></p>

      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {data?.map((r) => (
          <SwiperSlide key={r?._id} r={r}>
            <div className="m-24 text-center">
              <p className="text-center text-2xl text-purple-500 mb-5">
                {r?.fullName}
              </p>

              <p>{r?.reviews}</p>

              <Rating
                className=" mx-auto mt-5"
                style={{ maxWidth: 180 }}
                value={r?.ratting}
                readOnly
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DisplayReviews;
