import React, { useState } from "react";

import Item from "./Item";

import TodoForm from "./TodoForm";
import List from "./List";

import "./Todo.css";

function Todo() {
  const [items, setItems] = useState([]);

  function onAddItem(text) {
    let item = new Item(text);

    setItems([...items, item]);
  }

  function onItemDeleted(item) {
    let filteredItem = items.filter(it => it.id !== item.id);

    setItems(filteredItem);
  }

  return (
    <div className="container">
      <h1>Todo</h1>
      <TodoForm onAddItem={onAddItem}></TodoForm>
      <List onItemDeleted={onItemDeleted} items={items}></List>
    </div>
  );
}

export default Todo;
