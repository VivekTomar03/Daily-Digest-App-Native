import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI, getSourceAPI } from "./Api";

export const NewsContext = createContext();

const Context = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [source, setSource] = useState();
  const [index, setIndex] = useState(1);
  const [darkTheme, setDarkTheme] = useState(true);
  const [loading, setLoading] = useState(false);
  const fetchNews = async (reset = category) => {
    setLoading(true)
   try {
    setIndex(1);
    const { data } = await axios.get(getNewsAPI(reset));
    setNews(data);
    setLoading(false)
   } catch (error) {
    setLoading(false)
    console.log(error, error?.message)
   }
  };

  const fetchNewsfromSource = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(getSourceAPI(source));
      setNews(data);
       setLoading(false)
      setIndex(1);
    } catch (error) {
      console.log(error, error?.message);
      setLoading(false)
    }
  };

  useEffect(() => {
    console.log(category, "category changed");
    fetchNews();
  }, [category]);

  useEffect(() => {
    fetchNewsfromSource();
  }, [source]);

  return (
    <NewsContext.Provider
      value={{
        news,
        setCategory,
        index,
        setIndex,
        setSource,
        darkTheme,
        setDarkTheme,
        fetchNews,
        category,
        loading, 
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
