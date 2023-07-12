import React from 'react'
import "./sidebar.css"
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    
         <nav className="main-sidebar">
      <ul className="sider-ul">
        <li>
          <NavLink to="/">
            <div className="list-sidebar">
              <i className="fa-solid fa-house sider-icn"></i>
              <div className="sidebar-icn-name">Home</div>
            </div>
            </NavLink>
        
        </li>
     
        <li>
          <NavLink to="/play">
            <div className="list-sidebar">
              <i className="fa-solid fa-folder-plus sider-icn"></i>
              <div className="sidebar-icn-name ">Playlist</div>
            </div>
            </NavLink>
        </li> 
        <li className="hide">
             <NavLink to="/like">
            <div className="list-sidebar">
              <i className="fa-solid fa-heart sider-icn"></i>
              <div className="sidebar-icn-name">Liked&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
            </NavLink>
       
        </li>
        <li className="hide">
        <NavLink to="/watchlater">
            <div className="list-sidebar">
              <i className="fa-solid fa-clock sider-icn"></i>
              <div className="sidebar-icn-name">Watchlater</div>
            </div>
            </NavLink>
        </li>
        <li className="hide">
        <NavLink to="/history">
            <div className="list-sidebar">
              <i className="fa-solid fa-clock-rotate-left sider-icn"></i>
              <div className="sidebar-icn-name">&nbsp;&nbsp;&nbsp;History</div>
            </div>
            </NavLink>
        
        </li> 
        <li className="profile">
          <NavLink to="/profile">
            <div className="list-sidebar">
              <i className="fa-solid fa-user sider-icn"></i>
              <div className="sidebar-icn-name">Profile</div>
            </div>
          </NavLink>
        </li>

      
       
       
      </ul>
    </nav>
    
  )
}

export { Sidebar}