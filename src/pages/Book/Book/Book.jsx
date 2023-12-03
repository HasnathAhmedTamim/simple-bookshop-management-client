import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import bookImg from "../../../assets/All/cover2.jpg";
import useBook from "../../../hooks/useBook";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import BookCategory from "../BookCategory/BookCategory";

import mysImg from "../../../assets/banner-books/mybanner1.jpg";
import ficImg from "../../../assets/banner-books/mybanner2.jpg";
import fanImg from "../../../assets/banner-books/mybanner3.jpg";
import horImg from "../../../assets/banner-books/mybanner5.png";
import hisImg from "../../../assets/banner-books/mybanner4.jpg";


const Book = () => {
  const [book] = useBook();
  const mystery = book.filter((item) => item.category === "Mystery");
  const fiction = book.filter((item) => item.category === "Fiction");
  const fantasy = book.filter((item) => item.category === "Fantasy");
  const horror = book.filter((item) => item.category === "Horror");
  const history = book.filter((item) => item.category === "History");
  const offered = book.filter((item) => item.category === "Offered");

  return (
    <div className="">
      <Helmet>
        <title>CP BookShop | ALL Books</title>
      </Helmet>
      <Cover img={bookImg} title={"Our All Books"}></Cover>
      {/* book cover */}
      <SectionTitle
        subHeading={"Don't miss the offer"}
        heading={"Today's Book Offered"}
      ></SectionTitle>
      {/* Offered books */}
      <BookCategory items={offered}></BookCategory>
      {/*  */}
      <BookCategory items={mystery} title={"Mystery"} img={mysImg}></BookCategory>
      <BookCategory items={fiction} title={"Fiction"} img={ficImg}></BookCategory>
      <BookCategory items={fantasy} title={"Fantasy"} img={fanImg}></BookCategory>
      <BookCategory items={horror} title={"Horror"} img={horImg}></BookCategory>
      <BookCategory items={history} title={"History"} img={hisImg}></BookCategory>
    </div>
  );
};

export default Book;
