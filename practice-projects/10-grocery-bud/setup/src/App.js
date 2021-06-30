import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let items = localStorage.getItem('items');
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};

function App() {
  const [items, setItems] = useState(getLocalStorage());
  const [input, setInput] = useState('');
  const [isEditingItem, setIsEditingItem] = useState(false);
  const [editId, setEditId] = useState('');
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const addItem = (e) => {
    e.preventDefault();

    if (!input) {
      showAlert(true, 'input is error', 'alert-danger');
      return;
    }

    setItems([...items, { id: new Date().getTime().toString(), text: input }]);
    setInput('');
    setAlert({
      show: true,
      msg: 'item added to the list',
      type: 'alert-success',
    });
  };

  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
    showAlert(true, 'item removed from the list', 'alert-danger');
  };

  const deleteAllItems = () => {
    setItems([]);
    showAlert(true, 'removed all items from the list', 'alert-danger');
  };

  const editItem = (id) => {
    const item = items.find((item) => item.id === id);
    setInput(item.text);
    setIsEditingItem(true);
    setEditId(id);
  };

  const editListItem = () => {
    if (!input) {
      showAlert(true, 'input is error', 'alert-danger');
      return;
    }

    const itemIndex = items.findIndex((item) => item.id === editId);
    setItems((prevItems) => {
      const newItems = prevItems;
      newItems[itemIndex] = { id: newItems[itemIndex].id, text: input };
      return newItems;
    });
    setInput('');
    setIsEditingItem(false);
    showAlert(true, 'item edited', 'alert-success');
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ show: false, msg: '', type: '' });
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <section className="section-center">
      <form className="grocery-form">
        {alert.show && <Alert {...alert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g milk"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {isEditingItem ? (
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
          deleteAllItems={deleteAllItems}
        />
      )}
    </section>
  );
}

export default App;
