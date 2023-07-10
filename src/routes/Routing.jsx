import React from 'react'
import {  Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Categories } from '../Pages/Categoriespages/Categories';
import {Singlevideopage} from '../Pages/Singlevideopage/Singlevideopage';
import { Playlists} from '../Pages/Playlist/Playlists';
import {History} from '../Pages/Historypages/History';
import { Watchlater } from '../Pages/Watchlater/Watchlater';
import  {Login} from '../Pages/Loginpage/Login'
import { Signup } from '../Pages/Signuppage/Signup';
import { Routevideos } from '../Pages/Playlistvideos/Routevideos';
import { Likepage } from '../Pages/Likepage/Likepage';
import{Profilepage} from "../Pages/Profilepage/Profilepage"
import Mockman from "mockman-js";
const Routing = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Categories/>} />
      <Route path="/video/:videoId" element={<Singlevideopage/>} />
      <Route path="/play" element={<Playlists/>} />
      <Route path="/play/:category" element={<Routevideos/>} />
      <Route path="/watchlater" element={<Watchlater/>} />
      <Route path="/history" element={<History/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/like" element={<Likepage/>} />
      <Route path="/mockman" element={<Mockman/>} /> 
      <Route path="/profile" element={<Profilepage />} /> 
      </Routes>
    </>
  )
}

export {Routing}