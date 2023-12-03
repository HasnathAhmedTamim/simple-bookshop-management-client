import { Link } from "react-router-dom";
import BookItem from "../../Shared/BookItem/BookItem";
import Cover from "../../Shared/Cover/Cover";

const BookCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 my-16  ">
        {items.map((item) => (
          <BookItem key={item._id} item={item}></BookItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline text-gray bg-red-500 border-0 border-b-4 mt-1 rounded-lg ">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default BookCategory;
