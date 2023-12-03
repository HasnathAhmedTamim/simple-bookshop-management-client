import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CustomerTestimonials from "../CustomerTestimonials/CustomerTestimonials";
import Featured from "../Featured/Featured";
import PopularBooks from "../PopularBooks/PopularBooks";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CP BookShop | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularBooks></PopularBooks>
      <Featured></Featured>
      <CustomerTestimonials></CustomerTestimonials>
    </div>
  );
};

export default Home;
