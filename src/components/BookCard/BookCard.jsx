import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";

const BookCard = ({ item }) => {
  const { bookTitle, authorName, bookDescription, imageURL, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCarts();

  const handleAddToCart = (book) => {
    if (user && user.email) {
      // todo
      console.log(user.email, book);
      const cartIem = {
        bookId: _id,
        bookTitle,
        email: user.email,
        authorName,
        imageURL,
        price,
      };
      axiosSecure.post("/carts", cartIem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${bookTitle} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch card
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You're Not Logged In!",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send user lp
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card max-h-screen mx-auto shadow-xl bg-gradient-to-r from-indigo-500 drop-shadow-lg">
      <figure className="px-10 pt-10">
        <img src={imageURL} alt="" className="rounded-xl" />
      </figure>
      <p className=" bg-amber-500 text-black absolute right-0 mr-4 mt-4 px-4">
        ${price}
      </p>
      <div className="card-body items-center flex flex-col">
        <h2 className="card-title">{bookTitle}</h2>
        <h3>{authorName}</h3>
        <p>{bookDescription}</p>

        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline text-gray bg-red-500 border-0 border-b-4 mt-1 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
