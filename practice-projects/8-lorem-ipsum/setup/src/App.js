import React, { useState } from 'react';
import data from './data';
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [numberOfParagraphs, setNumberOfParagraphs] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (numberOfParagraphs > 0) {
      setParagraphs(data.slice(0, numberOfParagraphs));
    } else {
      setParagraphs(data.slice(0, 1));
    }
  };

  return (
    <section className="section-center" onSubmit={handleSubmit}>
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={numberOfParagraphs}
          onChange={(e) => setNumberOfParagraphs(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
