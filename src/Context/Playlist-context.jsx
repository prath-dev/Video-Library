import { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();

const PlaylistContextProvider = ({ children }) => {
  const [selected, setselected] = useState([]);
  const [playlist, setplaylist] = useState([]);
  const [showmodal,setshomodal] = useState(false)
  return (
    <PlaylistContext.Provider
      value={{ playlist, setplaylist, selected, setselected ,showmodal,setshomodal}} >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistContextProvider, usePlaylist };