import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Sidebar } from '../../components/Sidebar/sidebar'
import {useHistoryContext} from "../../Context/history-context"
import './history.css'
const History = () => {
  const {  setHistory,
    addToHistory,
    removeFromHistory,
    clearHistory,history} = useHistoryContext() ;

  return (
   <>
   <Navbar></Navbar>
   <Sidebar></Sidebar>
   {console.log("hostory")}
   {console.log(history)}
   <div class="history-box">
  { 
  history.length===0?<h2>History is Empty 😟Explore Videos</h2>:
    history.map((i)=>{
      return (
        <>
         <div class='cardpk'>
      <div class='imagex'>
     
     <img  onClick={()=>{videoClickHandler(i._id);addToHistory(i)}} src={i.thumbnailImg}/>
      </div> 
      <div class="video-bottom-section">
          <a href="#">
            <img class="channel-icon" src={i.creatorsLogo} />
          </a>
          <div class="video-details">
        
           
            <div class="video-metadata">
              <span>{i.views}views</span>
              •
              <span>{i.time}ago</span>
            </div>
          </div>
        </div>
        <button onClick={()=>removeFromHistory(i._id)}>Delete</button>
      </div>
        </>
      )
    })
  }
 
</div>
   </>
  )
}

export {History} 
