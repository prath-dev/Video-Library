
import React from 'react' ;
import { useState, useEffect}from "react";
import './moviecategory.css'
import { Link } from 'react-router-dom';
import { useWatchLaterContext} from "../../Context/watchlater-context";
import { useAuthContext } from "../../Context/auth-context";
import {videos} from '../../backend/db/videos'
import { useNavigate } from "react-router-dom";
import {useHistoryContext} from "../../Context/history-context"
import { useLocation, matchPath } from "react-router-dom";
import {useLikeContext} from "../../Context/likecontext"

const Moviescategory = () => {  
  const { watchLater, addToWatchLater, removeFromWatchLater } =useWatchLaterContext();
    const { auth } = useAuthContext();
    const location = useLocation();
    const { addToLike} = useLikeContext() ;
    const {  setHistory, addToHistory } = useHistoryContext() ;
  const navigate = useNavigate();

console.log(auth.loginStatus)

  const [data, setdata] = useState();

  const url = "/api/videos";
  
  const geturl = async (url) => {
    const data = await fetch(url);
    const ds = await data.json();
    setdata(ds.videos);
  };

  useEffect(() => {
    geturl(url);
    console.log(videos)
  }, []);





const filterhandler = (categorys) =>{
  if(categorys==="All"){
    setdata(videos)
  }
  else{
    const updatated=(videos.filter((i)=>i.category===categorys))
    setdata(updatated)
  }

}


  return ( 
  <>
 <div class="categories-buttonsz">
 <buttton onClick={()=>filterhandler("All")} className="btn-filter">ALL</buttton>
 <buttton onClick={()=>filterhandler("communication")} className="btn-filter">Communication</buttton>
 <buttton onClick={()=>filterhandler("video editing")} className="btn-filter">Video Edting</buttton>
 <buttton onClick={()=>filterhandler("sales")}  className="btn-filter">Sales</buttton>
 </div>
   <div class="flex-box">
 
  {
    data?.map((i)=>{
      return (
        <>
         <div class='cardpk'>
      <div  onClick={() => {
          navigate(`/video/${i._id}`);
          if (auth.loginStatus) addToHistory(i);
        }}class='imagex'>
   
     <img   src={i.thumbnailImg}/>
      </div> 
      <div class="video-bottom-section">
          <a href="#">
            <img class="channel-icon" src={i.creatorsLogo} />
          </a> 
          <p class="video-title"> {i.description.length > 40
                ? `${i.description.substring(0, 44)}...`
                : i.description}</p>
         
        </div>
      </div>
        </>
      )
    })
  }
 
</div>

  </>
  )
}

export {Moviescategory}