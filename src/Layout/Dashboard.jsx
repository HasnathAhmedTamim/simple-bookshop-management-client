import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCarts();
  // admin work db
  const [isAdmin] = useAdmin();

  return (
    <div className="flex font-mono font-semibold p-4 ">
      {/* side bar */}
      <div className="w-64 min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/users">
                  <FaUser></FaUser> All Users
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addItems">
                  <FaShoppingCart></FaShoppingCart> Add Items
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageItems">
                  <FaList></FaList> Manage Items
                </Link>
              </li>
              {/* <li>
                <Link to="/dashboard/bookings">
                  <FaBook></FaBook> Manage Bookings
                </Link>
              </li> */}
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/userHome">
                  <FaHome></FaHome> User Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/history">
                  <FaCalendar></FaCalendar> Payment History
                </Link>
              </li>
              <li>
                <Link to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
                </Link>
              </li>
              {/* <li>
                <Link to="/dashboard/review">
                  <FaAd></FaAd> Add a review
                </Link>
              </li> */}
              <li>
                <Link to="/dashboard/paymentHistory">
                  <FaList></FaList> Real Payment History
                </Link>
              </li>
            </>
          )}
          {/* shared links of nav */}
          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome></FaHome> Home
            </Link>
          </li>
          <li>
            <Link to="/order/Mystery">
              <FaBook></FaBook> Books
            </Link>
          </li>
          {/* <li>
            <Link to="/footer/contact">
              <FaPhone></FaPhone> Contact
            </Link>
          </li> */}
        </ul>
      </div>
      {/* content */}
      <div className="flex-1 p-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
