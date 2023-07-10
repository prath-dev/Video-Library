import React ,{useState,useEffect}from 'react'
import { usePlaylist } from "../../Context/Playlist-context";
import { useParams, useNavigate,Link } from "react-router-dom";
import "./Playlistmodal.css"
const Playlistmodal = () => {
  const { videoId } = useParams();
  const { playlist, setplaylist, selected,showmodal,setshomodal } = usePlaylist();
   const [id,setid] = useState(1)
    const [inputs, setinput] = useState();
    const closehandler = () =>{
      setshomodal(false)
      setinput("")
    }
  const categoryClickHandler = (e,i) =>{
    if(e.target.checked===false){
      setplaylist(playlist.map((c)=>c.category===i.category ?{...c,cards:c.cards.filter((ca)=>ca.category!==selected.category)}:c))
    }
    else{
      setplaylist(
        playlist.map((c) =>
          c.category === i.category? { ...c, cards: [...c.cards, selected] } : c
        )
      );
    }
 
  }
   const createhandler = () =>{
    console.log("input")
    setinput("")
    if( playlist.find((i)=>i.category===inputs)){
      setplaylist(playlist)
    }
    else{
      setplaylist([...playlist, { id:id, category: inputs, cards: [] }]);
      setid(id+1)
    }
    }
    const Mymodal = () =>{
        return (
            <>
            <div className='modal-wrapper'></div>
            <div className='modal-container'>
            <h3>Create Playlist</h3>
            {
              playlist.map((i)=>{
                const la = i.cards.map((i) => i._id === selected._id)
                return (
                  <>
                        <label className="filter-inputs">
                  <input
              
                    type="checkbox"
                   class="radio" value="1" name="fooby[1][]" 
                    onChange={(e) => categoryClickHandler(e,i)}
                    checked={la.includes(true) === true ? true : false}
                    
                  />
                </label>
              
                <span>{i.category}</span>

                  </>
                )
              })
            }
                <input   type="text" value={inputs} onChange={(e) => setinput(e.target.value)}  />
    
                <button onClick={createhandler}>Create</button>
            <button onClick={closehandler}>Close</button>
            </div>
            </>
        )
    }
  return (
    <>


   {showmodal && <Mymodal/>}</>
   
  )
}

export  {Playlistmodal}