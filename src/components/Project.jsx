import React from "react";
import create from "../assets/plus.svg";
import { Button, Tooltip , Modal } from 'flowbite-react';
const Project = () => {
    const projects = [{ id:1,
        name:"English Learning Plan",
        },{id:2,
            name:"Coding"}]
  return (
    <div className="project-container py-4 px-4 ">
      <div className="project_content">
        <div className="project_title mb-4 flex justify-between items-center">
          <h3>My Projects</h3>
          <Tooltip placement="right" content = "create"> 
          <img
            className="cursor-pointer create"
            src={create}
            alt="project"
            width={30}
            height={30}
          />
          </Tooltip>
        </div>
        <hr />
        <div className="project_items mt-4 gap-4 py-4 px-2.5">
          {projects.map((items) => (
            <div className="cursor-pointer" key={items}>
              <div className="w-full flex  items-center gap-2">
                <p className="text-center mb-4 text-white"><span>#</span> {items.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
