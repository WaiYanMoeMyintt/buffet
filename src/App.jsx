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

          <div className="theme_container  py-4 px-4">
            <div className="theme_content">
              <div className="light cursor-pointer flex items-center justify-between  gap-2">
                <img
                  src={sun}
                  alt="sun"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <p className = "text-center text-white">Light</p>
              </div>
              <div className="dark flex cursor-pointer items-center justify-between  gap-2">
                <img
                  src={moon}
                  alt="moon"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <p className = "text-center text-white">Dark</p>
              </div>
            </div>
          </div>
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
