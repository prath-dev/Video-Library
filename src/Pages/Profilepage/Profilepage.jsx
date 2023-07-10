import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar'
import { Sidebar } from '../../components/Sidebar/sidebar'
import "./profilepage.css"
const Profilepage = () => {
  return (
   <div>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
   <div className='profile-container'>
   <h2> My Profile</h2>
   <Link to="/like" className="Link">
          <div className="profile-btn-color">
            <i className="fa-solid fa-heart profile-icn"></i>
            <span className="profile-btn-name">Liked</span>
          </div>
        </Link>
        <Link to="/history" className="Link">
          <div className="profile-btn-color">
            <i className="fa-solid fa-clock-rotate-left profile-icn"></i>
            <span className="profile-btn-name">History</span>
          </div>
        </Link>
        <Link to="/watchlater" className="Link">
          <div className="profile-btn-color">
            <i className="fa-solid fa-clock profile-icn"></i>
            <span className="profile-btn-name">Watch Later</span>
          </div>
        </Link>
        </div>
   
   </div>
  )
}

export {Profilepage}