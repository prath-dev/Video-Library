import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./auth-context";

const LikeContext = createContext(null);

const LikeContextProvider = ({ children }) => {
  const [like, setLike] = useState([]);
const [playlist,setplaylist] = useState([])
  const { auth } = useAuthContext();

  const customHeader = {
    headers: {
      authorization: auth.token,
    },
  };

  useEffect(() => {
    if (auth.loginStatus) {
      (async () => {
        try {
          const response = await axios.get("/api/user/likes", customHeader);
          setLike(response.data.likes);
        } catch (error) {
          console.log(error);
        }
      })();
    } else setLike([]);
  }, [auth]);

  const addToLike = async (video) => {
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video },
        customHeader
      );

      setLike(response.data.likes);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromLike = async (videoId) => {
    try {
      const response = await axios.delete(
        `/api/user/likes/${videoId}`,
        customHeader
      );

      setLike(response.data.likes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LikeContext.Provider value={{ like, setLike, addToLike, removeFromLike }}>
      {children}
    </LikeContext.Provider>
  );
};

const useLikeContext = () => useContext(LikeContext);

export { useLikeContext, LikeContextProvider };