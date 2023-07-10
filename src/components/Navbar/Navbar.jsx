import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import { useAuthContext } from "../../Context/auth-context";
import { useWatchLaterContext} from "../../Context/watchlater-context";
const Navbar = () => {
  const { auth, setAuth } = useAuthContext()
  const {watchLater} = useWatchLaterContext()
  const logoutFunc = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("USER_INFO");

    setAuth({
      loginStatus: false,
      token: localStorage.getItem("TOKEN"),
      user: JSON.parse(localStorage.getItem("USER_INFO")),
    });
    navigate("/login");
  };

  return (
    <>
    <div className='App'>
  <header className="main-navbar">
        <div className="player">Player</div>
      <div className="search-outerbox">
      </div>
        {auth.loginStatus ? (
        <div className="login-btn Link" to="" onClick={() => logoutFunc()}>
          Logout
        </div>
      ) : (
        <Link className="login-btn Link" to="/login">
          Login
        </Link>
      )}
    </header>

 </div>

  </>
  )
}

export {  Navbar}