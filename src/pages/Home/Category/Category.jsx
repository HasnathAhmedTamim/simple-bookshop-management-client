import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// images
import slide1 from "../../../assets/Home/slide1.jpg";
import slide2 from "../../../assets/Home/slide2.jpg";
import slide3 from "../../../assets/Home/slide3.jpg";
import slide6 from "../../../assets/Home/slide6.jpg";
import slide7 from "../../../assets/Home/slide7.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"Order Books from Online"}
        subHeading={"Books Available 24hours"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <h3 className="text-4xl uppercase text-center mt-16 text-red-900 font-extrabold">
            mystery
          </h3>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-4xl uppercase text-center mt-16 text-red-900 font-extrabold">
            fictions
          </h3>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-4xl uppercase text-center mt-16 text-red-900 font-extrabold">
            fantasy
          </h3>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-4xl uppercase text-center mt-16 text-red-900 font-extrabold">
            horror
          </h3>
          <img src={slide6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="text-4xl uppercase text-center mt-16 text-red-900 font-extrabold">
            history
          </h3>
          <img src={slide7} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
