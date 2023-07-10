import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { makeServer } from "./server"; // this js file error will be removed after modifying allow js in tsconfig
import { AuthContextProvider } from "./Context/auth-context";
import { WatchLaterContextProvider} from "./Context/watchlater-context";
import {HistoryContextProvider}  from "./Context/history-context";
import {LikeContextProvider}from "./Context/likecontext"
import { PlaylistContextProvider } from "./Context/Playlist-context";
makeServer();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <PlaylistContextProvider>
      < WatchLaterContextProvider>
<HistoryContextProvider>
<LikeContextProvider>
    <App />
    </LikeContextProvider>
    </HistoryContextProvider>
    </ WatchLaterContextProvider>
    </PlaylistContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
