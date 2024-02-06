import React from "react";
import "./index.css";
import "./components/css/index.css";
import { SideContent, Sidebar, Board, Project } from "./components";
import moon from "./assets/half-moon.svg";
import sun from "./assets/sun-light.svg";
const App = ({children}) => {
  return (
    <main className="relative ">
      <div className="main_container flex justify-between ">
        <div className="sidebar h-96 lg:w-4/12 w-screen ">
          <Sidebar />
          <Board />
          <Project />
        </div>
        <div className="sidebar_context   w-full">
          <SideContent />
        </div>
      </div>
      <div>{children}</div>
    </main>
  );
};

export default App;
