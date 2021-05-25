import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = new Set(items.map((item) => item.category));

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(['all', ...allCategories]);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const itemsByCategory = items.filter((item) => item.category === category);
    setMenuItems(itemsByCategory);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>out menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
