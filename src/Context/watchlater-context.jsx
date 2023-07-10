import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "./auth-context";

const WatchLaterContext = createContext();

const WatchLaterContextProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);

  const { auth } = useAuthContext();
 

  const customHeader = {
    headers: {
      authorization: auth.token,
    },
  };


  useEffect(() => {
    console.log(auth.loginStatus)
    if (auth.loginStatus===true) {
      (async () => {
        try {
          const response = await axios.get(
            "/api/user/watchlater",
            customHeader
          );
          setWatchLater(response.data.watchlater);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      console.log("login")

    } setWatchLater([]);
  }, [auth]);

  const addToWatchLater = async (video) => {
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        customHeader
       
      );
      console.log(response)
      setWatchLater(response.data.watchlater);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWatchLater = async (videoId) => {
    try {
      const response = await axios.delete(
        `/api/user/watchlater/${videoId}`,
        customHeader
      );
      setWatchLater(response.data.watchlater);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WatchLaterContext.Provider
      value={{
        watchLater,
        setWatchLater,
        addToWatchLater,
        removeFromWatchLater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLaterContext = () => useContext(WatchLaterContext);

export { useWatchLaterContext, WatchLaterContextProvider };