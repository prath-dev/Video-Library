import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import {useLikeContext} from "../../Context/likecontext"
import { usePlaylist } from "../../Context/Playlist-context";
import { Sidebar } from '../../components/Sidebar/sidebar'
import "./Playlist.css"
const Playlists = () => {
  const { playlist,setplaylist} = usePlaylist();
  console.log("fromlist")
  console.log(playlist)
  const deletehandler  = (videos) =>{
    console.log("delete")
    console.log(videos.category)
    setplaylist(playlist.filter((i)=>i.id!==videos.id))
  }
  return (
    <>
   <Navbar></Navbar>
   <Sidebar></Sidebar>
   <div class='playlist-box'>
   { playlist.length===0?
   <h2>Playlist is Empty 😟Explore Videos</h2>:
  playlist.map((i)=>{
   return (
     <>
        <div class='card-route'>
      <div class='img'></div>
    
      <Link to={`/play/${i.category}`}>Name: {i.category}</Link>
      <p>{i.cards.length}videos</p>
      <button onClick={()=>deletehandler(i)}>Delete</button>
   </div>
   
     </>
   )
  })
  }

</div>
 
    </>
  )
}

export {  Playlists}
