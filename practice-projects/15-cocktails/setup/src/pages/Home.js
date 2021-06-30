import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context';

const Home = () => {
  const { loading } = useGlobalContext();
  return (
    <main>
      <SearchForm />
      {loading ? <Loading /> : <CocktailList />}
    </main>
  );
};

export default Home;
