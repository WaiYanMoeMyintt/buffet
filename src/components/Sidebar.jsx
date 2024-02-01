import React from "react";
import Nav from "./Nav";
import "./css/index.css";
const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_content py-4 px-4 flex gap-4 justify-between">
         <Nav />
      </div>
    </div>
  );
};

export default Sidebar;
