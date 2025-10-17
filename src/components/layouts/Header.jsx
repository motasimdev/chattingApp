import React from "react";
import { Link } from "react-router";
import { RiChatAiFill } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <div className="py-5 bg-gray-200">
        <div className="max-w-[1320px] m-auto">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <RiChatAiFill className="text-2xl"/>
              <p className="text-lg text-black">chatty</p>
            </div>
            <div className="">
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
        </div>
      </div>
    </>
  );
};

export default Header;
