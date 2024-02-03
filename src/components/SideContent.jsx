import React from 'react'
import "./css/index.css";
import Today from "../pages/Today.jsx";
import Travel from "../pages/Travel.jsx";
import Meeting from "../pages/Meeting.jsx";
import Overview from "../pages/Overview.jsx";
import { Route, Routes } from 'react-router-dom';

const SideContent = () => {
  return (
    <div className="sidecontent_container">
          <div className="sidecontent_content py-4 px-4">
              <h2>Fucker</h2>
          </div>
          <Routes>
              <Route path = {"/Overview"} element = {<Overview />} />
              <Route path = {"/Travel"} element = {<Travel />} />
              <Route path = {"/Meeting"} element = {<Meeting />} />
              <Route path = {"/Today"} element = {<Today />} />
          </Routes>
    </div>
  )
}

export default SideContent