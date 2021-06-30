import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchCocktail = async () => {
    setLoading(true);
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    try {
      const cocktail = await response.json();
      setCocktail(cocktail.drinks[0]);
      console.log(cocktail.drinks[0]);
      setLoading(false);
    } catch {
      setLoading(false);
      setCocktail(null);
      return;
    }
  };

  useEffect(() => {
    fetchCocktail();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (cocktail == null) {
    return <h2 className="section-title">No cocktail to display</h2>;
  }

  const {
    strDrink,
    strAlcoholic,
    strGlass,
    strDrinkThumb,
    strCategory,
    strInstructions,
  } = cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{strDrink}</h2>
      <div className="drink">
        <img src={strDrinkThumb} alt={strDrink} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {strDrink}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {strCategory}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {strGlass}
          </p>
          <p>
            <span className="drink-data">Instructions :</span>
            {strInstructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {Object.entries(cocktail)
              .filter((param) => param[0].startsWith('strIngredient'))
              .map((ingredient, index) => {
                if (ingredient[1] != null) {
                  return <span key={index}>{ingredient[1]}</span>;
                }
              })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
