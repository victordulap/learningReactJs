import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const fetchData = async (url) => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setData(data.drinks);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(url + search);
  }, [search]);

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        loading,
        search,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
