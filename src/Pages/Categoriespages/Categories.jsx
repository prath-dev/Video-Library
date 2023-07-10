import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Moviescategory } from '../../components/Moviescategory/Moviescategory'
import { Sidebar } from '../../components/Sidebar/sidebar'
import { usePlaylist } from "../../Context/Playlist-context";

const Categories = () => {
  const { playlist} = usePlaylist();
  console.log("play")
  console.log(playlist)
  return (
<>
<Navbar>
</Navbar>
<Sidebar></Sidebar>
<Moviescategory></Moviescategory>



</>
  )
}

export {Categories}