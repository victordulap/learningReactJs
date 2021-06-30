import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { search, setSearch } = useGlobalContext();
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
