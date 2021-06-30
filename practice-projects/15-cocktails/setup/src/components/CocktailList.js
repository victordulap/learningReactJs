import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const CocktailList = () => {
  const { data } = useGlobalContext();

  if (data === null) {
    return (
      <section className="section">
        <h2 className="section-title">
          no cocktails found mathing search criteria
        </h2>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {data.map((cocktail) => {
          const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
            cocktail;
          return (
            <article key={idDrink} className="cocktail">
              <div className="img-container">
                <img src={strDrinkThumb} alt={strDrink} />
              </div>
              <div className="cocktail-footer">
                <h3>{strDrink}</h3>
                <h4>{strGlass}</h4>
                <p>{strAlcoholic}</p>
                <Link
                  to={`/cocktail/${idDrink}`}
                  className="btn btn-primary btn-details"
                >
                  details
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CocktailList;
