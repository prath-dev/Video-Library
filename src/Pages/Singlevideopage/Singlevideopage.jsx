import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { useParams, useNavigate,Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { Playlistmodal } from '../../components/Playlistmodal/Playlistmodal' ;
import { Sidebar } from '../../components/Sidebar/sidebar'
import { usePlaylist } from "../../Context/Playlist-context";
import { useWatchLaterContext} from "../../Context/watchlater-context";
import { useLikeContext} from "../../Context/likecontext";
import "./Singlevideopage.css"
import axios from "axios";



const Singlevideopage = () => {
  const { watchLater, addToWatchLater, removeFromWatchLater } =useWatchLaterContext();
  const { playlist, setplaylist, selected, setselected ,setshomodal} = usePlaylist();
  const [video, setVideo] = useState({});
  const { videoId } = useParams();
  const { addToLike,like,removeFromLike} = useLikeContext() ;

  useEffect(() => {
    (async () => {
      const videoResponse = await axios.get(`/api/video/${videoId}`);

      setVideo(videoResponse.data.video);
    })();
  }, []);
  const add = (video) =>{
    setshomodal(true)
   console.log(video.creator)
   setselected(video)
  }


  return (
<>
<Navbar />
      
      <Sidebar></Sidebar>

<div className="Video video-listing-body">
    
      <div className="video-page-container">
        <div className="video-details-container">
          <div className="iframe-container">
            <iframe
              width="1100"
              height="448.2"
              src={`https://www.youtube-nocookie.com/embed/${video._id}/?autoplay=1`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
          <h2 className="video-details-title">{video.title}</h2>
          <div className="video-details-action-container">
            <div className="video-details-btn-container">
              <div className="video-details-date-container">
                <p> {video.date} </p>
              </div>
            </div>
          </div>
     
        </div>
     
      </div>
    
    </div>
    <div className="video-details">
  
          <div className="video-header">
            <div className="video-title">{video.description}</div>

            <div className="video-subheader">
              <div className="video-numbers">
                <div className="video-views">
                   {video.views}views
                </div>
                ·
                <div className="video-release">{video.time}ago</div>
         
              </div>

              <div className="video-actions">
                <button>
                </button>

                <button> </button>

              </div>
            </div>
          </div>

        
        </div>
        <div class="all-buttons">
           

           <i onClick={()=>add(video)} className="fa-solid fa-folder-plus sider-icn"></i>
        
           
           {
            watchLater.find((i)=>i._id===video._id)?
       
            <i style={{color:"blue"}}  onClick={()=>removeFromWatchLater(video._id)} className="fa-solid fa-clock sider-icn"></i>   :
             <i style={{color:null}}  onClick={()=>addToWatchLater(video)} className="fa-solid fa-clock sider-icn"></i>
      
           }
    {
            like.find((i)=>i._id===video._id)?
          
            <i style={{color:"red"}}  onClick={()=>removeFromLike(video._id)} className="fa-solid fa-heart sider-icn"></i>:
             <i style={{color:null}}   onClick={()=>addToLike(video)} className="fa-solid fa-heart sider-icn"></i>
               
           }        
         
          
           <Playlistmodal/>
       

          
       
      </div>
    
     
        </>
  )
}

export {Singlevideopage} 