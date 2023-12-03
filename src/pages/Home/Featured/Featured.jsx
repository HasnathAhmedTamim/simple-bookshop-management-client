import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/All/favoritebook.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="mb-12 bg-fixed featured-item text-black">
      <SectionTitle
        subHeading={"Check Up On"}
        heading={"Find Your Favorite Books"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-8 px-16 ">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-11 bg-red-100 text-justify p-4">
          <h2 className="uppercase mb-2 text-3xl p-2">
            Because every day with a book is slightly better than one without,
            and I wish you nothing but the happiest of days.
          </h2>

          <button className="btn btn-outline text-gray bg-red-500 border-0 border-b-4 mt-1 rounded-lg ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
