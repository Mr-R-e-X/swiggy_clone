import { useState } from "react";
import { APP_LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex flex-row justify-between w-full items-center text-black">
      <div className="ml-5 w-28 h-auto">
        <img className="h-full w-full object-cover" src={APP_LOGO_URL} />
      </div>
      <div className="mr-5 tracking-wide font-medium">
        <ul className="flex flex-row text-lg items-center">
          <li className="m-3 p-3">
            Staus: {onlineStatus === false ? "🔴" : "🟢"}
          </li>
          <li className="m-3 p-3">
            <Link to="/">Home</Link>
          </li>
          <li className="m-3 p-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-3 p-3">
            <Link to="/contacts">Contact Us</Link>
          </li>
          <li className="m-3 p-3">Cart</li>
          <li className="m-3 p-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="cursor-pointer bg-slate-600 text-white px-5 py-2 rounded-md shadow-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
