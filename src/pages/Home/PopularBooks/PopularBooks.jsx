
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useBook from "../../../hooks/useBook";
import BookItem from "../../Shared/BookItem/BookItem";

// fetch

const PopularBooks = () => {
  const [book] = useBook()
  const popular = book.filter((item) => item.category === "Fiction");

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"Our CP Book Shop"}
        subHeading={"Popular Books"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
        {popular.map((item) => (
          <BookItem key={item._id} item={item}></BookItem>
        ))}
      </div>
      <button className="btn btn-outline text-gray bg-red-500 border-0 border-b-4 mt-1 rounded-lg sm:btn-sm md:btn-md lg:btn-lg ">
        View All Books
      </button>
    </section>
  );
};

export default PopularBooks;
