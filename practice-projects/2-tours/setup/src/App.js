import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    setTours((tours) => tours.filter((tour) => tour.id !== id));
    // console.log(setTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      setIsLoading(false);
      setTours(tours);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <div className="underline"></div>
        </div>
        <button className="btn" onClick={fetchTours}>
          reset
        </button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
