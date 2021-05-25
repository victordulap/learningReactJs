import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [inputIsError, setInputIsError] = useState(false);
  const [itemIsAdded, setItemIsAdded] = useState(false);
  const [itemIsRemoved, setItemIsRemoved] = useState(false);
  const [editingItem, setEditingItem] = useState(false);
  const [editId, setEditId] = useState('');

  const addItem = (e) => {
    e.preventDefault();

    if (!input) {
      setInputIsError((prev) => (prev = true));
      return;
    }

    setItems([...items, { id: new Date().getTime().toString(), text: input }]);
    setInput('');
    setItemIsAdded(true);
  };

  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
    setItemIsRemoved(true);
  };

  const editItem = (id) => {
    const item = items.find((item) => item.id === id);
    setInput(item.text);
    setEditingItem(true);
    setEditId(id);
  };

  const editListItem = () => {
    if (!input) {
      setInputIsError((prev) => (prev = true));
      return;
    }

    const itemIndex = items.findIndex((item) => item.id === editId);
    setItems((prevItems) => {
      const newItems = prevItems;
      newItems[itemIndex] = { id: newItems[itemIndex].id, text: input };
      return newItems;
    });
    setInput('');
    setItemIsAdded(true);
    setEditingItem(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInputIsError(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [inputIsError]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setItemIsAdded(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [itemIsAdded]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setItemIsRemoved(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [itemIsAdded]);

  return (
    <section className="section-center">
      <form className="grocery-form">
        {inputIsError && <Alert red text="please enter value" />}
        {itemIsAdded && <Alert text="item added to the list" />}
        {itemIsRemoved && <Alert red text="item removed from the list" />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g milk"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {editingItem ? (
            <button
              type="submit"
              className="submit-btn"
              onClick={(e) => {
                e.preventDefault();
                editListItem();
              }}
            >
              edit
            </button>
          ) : (
            <button
              type="submit"
              className="submit-btn"
              onClick={(e) => addItem(e)}
            >
              submit
            </button>
          )}
        </div>
      </form>
      {items.length > 0 && (
        <List
          items={items}
          setItems={setItems}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      )}
    </section>
  );
}

export default App;
