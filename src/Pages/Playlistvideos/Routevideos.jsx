import React from 'react'
import { usePlaylist } from "../../Context/Playlist-context";
import { Link } from "react-router-dom";
import { Navbar } from '../../components/Navbar/Navbar'
import { Sidebar } from '../../components/Sidebar/sidebar'
import "./routevideo.css"
import { useParams } from "react-router-dom";


const Routevideos = () => {
  const { category } = useParams();
  const { playlist, setplaylist, selected,showmodal,setshomodal } = usePlaylist();
const deltevideohandler = (i) =>{
  setplaylist(playlist.map((c)=>c.category===category ?{...c,cards:c.cards.filter((ca)=>ca.category!==i.category)}:c))
  console.log("ye")
console.log(i)
}
  return (
   <>
   <Navbar></Navbar>
   <Sidebar></Sidebar>
<div class='playlist-container3'>
 


     {
      playlist.length===0?
      <img src="https://leviosa-streams.vercel.app/img/empty-playlist.gif"img/>:
      playlist.filter((f)=>f.category===category).map((m)=>{
        return (
          <>
          
          {
            m.cards.map((f)=>{
              return (
                <>
                   <div class='playlist-videos3'>
                   <div class='img2'>
         <img src={f.thumbnailImg}/>
      </div>
          <p>{f.creator}</p>
          <button onClick={()=>deltevideohandler(f)}>delete</button>
          </div>
                </>
              )
            })
          }
       
          </>
        )
      })
     }
   </div>
   

 
   
   

 </>






   
   
  )
}

export {Routevideos}
/*{
  playlist.filter((f)=>f.category===category).map((m)=>{
    return(
      <>
      <h2>{m.cards.map((f)=>{
        return(
          <>
          <h2>{f.creator}</h2>
          </>
        )
      })}</h2>

      </>
    )
  })
   <div class='playlist-videos3'>
      <div class='img2'>
         <img/>
      </div>
      <p class='title'>This is a demo post.</p>
   </div>
         <>
      <h2>{m.cards.map((f)=>{
        return(
          <>
            <div class='img2'>
         <img src={f.thumbnailImg}/>
      </div>
          <p>{f.creator}</p>
          </>
        )
      })}</h2>

 }*/