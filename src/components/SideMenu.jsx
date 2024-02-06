import React, { useState, useContext } from "react";
import search from "../assets/search.svg";
const SideMenu = ({ message }) => {
  return (
    <div className="side_menu_section flex justify-between items-center flex-1">
      <div className="greeting_content">
        <p>{message}</p>
      </div>
      <div className="search_content flex gap-4">
        <img className="cursor-pointer" src={search} width={25} height={25} />
        <input className="text-white" type="text" placeholder="eg- breakfast" />
      </div>
    </div>
  );
};

export default SideMenu;
