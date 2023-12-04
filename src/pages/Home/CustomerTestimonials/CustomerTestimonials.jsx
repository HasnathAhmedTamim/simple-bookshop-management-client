import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const CustomerTestimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://cp-shop.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What Our Customer Say"}
        heading={"Customer Testimonials"}
      ></SectionTitle>

      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.4,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {reviews.map((reviews) => (
          <SwiperSlide key={reviews._id}>
            <div className="flex flex-col items-center text-justify bg-current p-20 mx-24 my-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <img
                className=" rounded-lg "
                width={250}
                src={reviews?.imageURL}
                alt="img"
              />
              <h2 className="text-4xl font-bold text-white">{reviews.name}</h2>
              <p className="text-xl text-yellow-100">{reviews.details}</p>
              <Rating
                style={{ maxWidth: 180 }}
                value={reviews.rating}
                readOnly
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerTestimonials;
