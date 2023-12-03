import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//
import img1 from "../../../assets/banner-books/book1.png";
import img2 from "../../../assets/banner-books/book2.png";
import img3 from "../../../assets/banner-books/book4.png";
import img4 from "../../../assets/banner-books/book4.png";
import img5 from "../../../assets/banner-books/book5.png";

const Banner = () => {
  return (
    <Carousel width={350} className="p-20  lg:flex-col">
      <div>
        <h3 className="text-3xl font-bold">
          Get Your Books <br /> At Best Price !!!
        </h3>
        <img src={img1} />
      </div>
      <div>
        <h3 className="text-3xl font-bold">
          Get Your Books <br /> At Best Price !!!
        </h3>
        <img src={img2} />
      </div>
      <div>
        <h3 className="text-3xl font-bold">
          Get Your Books <br /> At Best Price !!!
        </h3>
        <img src={img3} />
      </div>
      <div>
        <h3 className="text-3xl font-bold">
          Get Your Books <br /> At Best Price !!!
        </h3>
        <img src={img4} />
      </div>
      <div>
        <h3 className="text-3xl font-bold">
          Get Your Books <br /> At Best Price !!!
        </h3>
        <img src={img5} />
      </div>
    </Carousel>
  );
};

export default Banner;
