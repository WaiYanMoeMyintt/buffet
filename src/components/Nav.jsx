import React from "react";
import door from "../assets/door.svg";
import profile from "../assets/profile.png";
import noti from "../assets/bell.svg";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav_menu w-full">
      <Link to = "/" className="main_logo mb-4">
        <div className="logo">
           <h2>Task<span>Mate</span></h2>
        </div>
        <p>Focus.Active.Execute</p>
      </Link>
      <div className="nav_menu_navigation mt-5 flex justify-between items-center flex-1">
        <div className="profile flex items-center justify-center gap-1">
          <div className="card">
            <img
              className="cursor-pointer"
              src={profile}
              alt="profile"
              width={35}
              height={35}
            />
          </div>
          <p className="text-center text-white ml-2.5">Miracle</p>
        </div>
        <div className="menu_tab flex items-center gap-1">
          <div className="bell cursor-pointer">
            <img src={noti} alt="noti" width={20} height={20} />
          </div>
          <div className="door cursor-pointer">
            <img src={door} alt="door" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
