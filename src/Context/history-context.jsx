import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";
import { useAuthContext } from "./auth-context";

const HistoryContext = createContext(null);

const HistoryContextProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

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
          const response = await axios.get("/api/user/history", customHeader);
          setHistory(response.data.history);
        } catch (error) {
          console.log(error);
        }
      })();
    } else setHistory([]);
  }, [auth]);

  const addToHistory = async (video) => {
    try {
      const response = await axios.post(
        "/api/user/history",
        {
          video,
        },
        customHeader
      );
      setHistory(response.data.history);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromHistory = async (videoId) => {
    try {
      const response = await axios.delete(
        `/api/user/history/${videoId}`,
        customHeader
      );
      setHistory(response.data.history);
    } catch (error) {
      console.log(error);
    }
  };

  const clearHistory = async () => {
    try {
      const response = await axios.delete(
        "/api/user/history/all",
        customHeader
      );
      setHistory(response.data.history);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HistoryContext.Provider
      value={{
        history,
        setHistory,
        addToHistory,
        removeFromHistory,
        clearHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

const useHistoryContext = () => useContext(HistoryContext);

export { HistoryContextProvider, useHistoryContext };