import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <div className="py-10 bg-amber-400">
        <div className="max-w-[1320px] m-auto">
          <ul className="flex items-center justify-end gap-x-4">
            <Link to={"/"}>
              <li className="hover:text-[#916363] text-amber-950 text-md">
                Home
              </li>
            </Link>
            <Link to={"/signup"}>
              <li className="hover:text-[#916363] text-amber-950 text-md">
                SignUp
              </li>
            </Link>
            <Link to={"/login"}>
              <li className="hover:text-[#916363] text-amber-950 text-md">
                LogIn
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
