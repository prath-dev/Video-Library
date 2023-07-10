
import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { useLikeContext} from "../../Context/likecontext";
import { Sidebar } from '../../components/Sidebar/sidebar'
import "./Like.css"
const Likepage = () => {
    const { addToLike,like,removeFromLike} = useLikeContext() ;
  return (
<>
<Navbar></Navbar>
<Sidebar></Sidebar>

<div class='playlist-container3'>

      <>  
      {
        like.length===0?<h2>Like is Empty 😟Explore Videos</h2>:
      like.map((f)=>{
          return (
            <>
               <div class='playlist-videos3'>
               <div class='img2'>
     <img src={f.thumbnailImg}/>
  </div>
      <p>{f.creator}</p>
      <button onClick={()=>removeFromLike(f._id)}>Delete</button>
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

export {Likepage}