import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { useWatchLaterContext} from "../../Context/watchlater-context";
import { Sidebar } from '../../components/Sidebar/sidebar'
import "./Watchlater.css"
const Watchlater = () => {
  const { watchLater, addToWatchLater, removeFromWatchLater } =useWatchLaterContext();

  return (
    <>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <div class='playlist-container3'>
      <>  
      {
        watchLater.length===0?<h2>Watchlater is Empty 😟Explore Videos</h2>:
      watchLater.map((f)=>{
          return (
            <>
               <div class='playlist-videos3'>
               <div class='img2'>
     <img src={f.thumbnailImg}/>
  </div>
      <p>{f.creator}</p>
      <button onClick={()=>removeFromWatchLater(f._id)}>Delete</button>
      </div>
            </>
          )
        })
      }
   
      </>
   
</div>
    </>
  )
}

export  {Watchlater}
