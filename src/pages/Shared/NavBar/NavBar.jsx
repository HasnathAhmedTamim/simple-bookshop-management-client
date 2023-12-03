import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../../hooks/useCarts";
import useAdmin from "../../../hooks/useAdmin";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCarts();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <div className="btn btn-primary">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/book">All Books</Link>
        </li>

        <li>
          <Link to="/order/Mystery">Order Books</Link>
        </li>
        {}
        {user && isAdmin && (
          <li>
            <Link to="/dashboard/adminHome">Dashboard</Link>
          </li>
        )}
        {user && !isAdmin && (
          <li>
            <Link to="/dashboard/userHome">Dashboard</Link>
          </li>
        )}
        <li>
          <Link to="/signup">Register</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/dashboard/cart">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            <button className="">
              <div className="badge badge-secondary bg-red-600">
                +{cart?.length}
              </div>
            </button>
          </Link>
        </li>
        {user ? (
          <>
            {/* <span>{user?.displayName} </span> */}
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </div>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 fixed z-10 bg-opacity-60 text-white max-w-screen-xl mx-auto">
        <div className="navbar-start ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-outline text-xl ">
            {" "}
            <img width={24} src="/book-4986.svg" alt="" />
            CP Book Shop
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">
            <a id="myLink" href="www.youtube.com" target="_blank">
              Watch Demo
            </a>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
