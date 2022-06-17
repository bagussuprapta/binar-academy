import { useState } from "react";
import "./App.css";

function App() {
  const [listItems, setListItems] = useState([]);
  const [newItemText, setNewItemText] = useState("");

  const handleNewItemChange = (e) => {
    setNewItemText(e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    setListItems([
      ...listItems,
      {
        text: newItemText,
        id: listItems.length,
      },
    ]);
    setNewItemText("");
  };

  const handleRemoveItem = (id) => {
    const newListItems = listItems.filter((item) => item.id !== id);
    setListItems(newListItems);
  };

  const listItemComponents = listItems.map((item) => {
    return (
      <li data-testid={`item${item.id}`} key={item.id}>
        {item.text}
        <button
          data-testid={`remove-item${item.id}`}
          onClick={() => handleRemoveItem(item.id)}
        >
          Remove
        </button>
      </li>
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleAddItem}>
          <label htmlFor="newItem">
            Create List Item
            <input
              id="newItem"
              value={newItemText}
              onChange={handleNewItemChange}
            />
          </label>
          <input data-testid="add-item" type="submit" value="Add Item" />
        </form>
        <ul>{listItemComponents}</ul>
      </header>
    </div>
  );
}

export default App;