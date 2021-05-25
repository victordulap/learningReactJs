import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const generateColorsList = (newColor) => {
    const rgbColor = hexToRgb(newColor);
    const newColorList = [];
    const lightLimit = 10;

    newColorList[lightLimit] = { ...rgbColor, percent: 0 };

    // light
    for (let i = 0, percent = 10; i < lightLimit; i++, percent += 10) {
      const newR = Math.floor(rgbColor.r + 25.5 * (i + 1) <= 255)
        ? Math.floor(rgbColor.r + 25.5 * (i + 1))
        : 255;
      const newG = Math.floor(rgbColor.g + 25.5 * (i + 1) <= 255)
        ? Math.floor(rgbColor.g + 25.5 * (i + 1))
        : 255;
      const newB = Math.floor(rgbColor.b + 25.5 * (i + 1) <= 255)
        ? Math.floor(rgbColor.b + 25.5 * (i + 1))
        : 255;
      newColorList[lightLimit - i - 1] = { r: newR, g: newG, b: newB, percent };
    }

    // dark
    const darkLimit = 20;
    for (let i = 0, percent = 10; i < lightLimit; i++, percent += 10) {
      const newR = Math.floor(rgbColor.r - 25.5 * (i + 1) >= 0)
        ? Math.floor(rgbColor.r - 25.5 * (i + 1))
        : 0;
      const newG = Math.floor(rgbColor.g - 25.5 * (i + 1) >= 0)
        ? Math.floor(rgbColor.g - 25.5 * (i + 1))
        : 0;
      const newB = Math.floor(rgbColor.b - 25.5 * (i + 1) >= 0)
        ? Math.floor(rgbColor.b - 25.5 * (i + 1))
        : 0;
      newColorList[lightLimit + i + 1] = { r: newR, g: newG, b: newB, percent };
    }

    return newColorList;
  };

  const [colorInput, setColorInput] = useState('');
  const [colorsList, setColorsList] = useState(generateColorsList('#ff0000'));
  const [inputError, setInputError] = useState(false);

  const isColor = (colorToCheck) => {
    if (colorToCheck.startsWith('#') && colorToCheck.length === 7) {
      for (let i = 1; i < 7; i++) {
        const value = colorToCheck[i];
        const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
        if (!(value >= 0 && value < 10) && !letters.includes(value)) {
          return false;
        }
      }
      return true;
    }
    return false;
  };

  const changeColor = () => {
    if (isColor(colorInput)) {
      setInputError(false);
      setColorsList(generateColorsList(colorInput));
    } else {
      setInputError(true);
    }
  };

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form>
          <input
            type="text"
            placeholder="#f15025"
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            className={`${inputError ? 'error' : null}`}
          />
          <button
            type="submit"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              changeColor();
            }}
          >
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {/* <SingleColor hexColor={color} /> */}
        {colorsList.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              colorClass={index < 10 ? 'false' : 'color-light'}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
