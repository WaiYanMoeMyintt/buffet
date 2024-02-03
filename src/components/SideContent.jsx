import React from 'react'
import "./css/index.css";
import Today from "../pages/Today.jsx";
import Travel from "../pages/Travel.jsx";
import Meeting from "../pages/Meeting.jsx";
import Overview from "../pages/Overview.jsx";
import SideMenu from './SideMenu.jsx';
import { Route, Routes } from 'react-router-dom';

const SideContent = () => {

    const time =  new Date().getHours();
    let message = "";
    if(time >= 18){
        message =  "Good Night Miracle";
    }
    else if(time <  12){
      message ="Good Morning Miracle"
    }
    else if(time <= 15){
      message = "Good Afternoon Miracle"
    }
    else if(time <= 17){
      message = "Good Evening Miracle";
    }

  return (
    <div className="sidecontent_container">
          <div className="sidecontent_content py-4 px-4">
               <SideMenu message = {message}/>
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