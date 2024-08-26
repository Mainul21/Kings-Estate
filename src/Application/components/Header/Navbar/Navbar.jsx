import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        alert(error.message);
      });
  };
  const links = (
    <>
      <li className="mr-2">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user ? (
        <>
          <li className="mr-2">
            <NavLink to={"/update"}>Update Profile</NavLink>
          </li>
          <li className="mr-2">
            <NavLink to={"/profile"}>User Profile</NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="mr-2">
            <NavLink to={"/login"}>Log In</NavLink>
          </li>
          <li className="mr-2">
            <NavLink to={"/signup"}>Sign Up</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <button
            className="btn btn-ghost bg-gray-600 text-white"
            onClick={handleLogOut}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
