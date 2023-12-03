import { FaPaypal, FaTrashAlt } from "react-icons/fa";
import useCarts from "../../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCarts();
  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Want To Remove Product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Product has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly mb-6 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-6">
        <h2 className="text-3xl font-mono font-semibold">
          Books Items : {cart.length}{" "}
        </h2>
        <h2 className="text-3xl font-mono font-semibold">
          Total Amount : ${totalPrice}{" "}
        </h2>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-outline font-mono font-semibold ">
              <FaPaypal></FaPaypal> Pay
            </button>
          </Link>
        ) : (
          <button disabled className="btn btn-outline font-mono font-semibold ">
            <FaPaypal></FaPaypal> Pay
          </button>
        )}
      </div>

      <div className="overflow-x-auto bg-gradient-to-r from-indigo-500 w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#Product</th>
              <th>Image</th>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Price </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                {/* <th>{item._id}</th> */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.imageURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item?.bookTitle}</td>
                <td>{item?.authorName}</td>
                <td>${item?.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-800"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
