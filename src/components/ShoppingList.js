import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [selectedCategory, setSelectedCategory] = useState('All')

function changeHandler(e) {
  setSelectedCategory(e.target.value)
}

const newFilter = items.filter(item => item.category === selectedCategory)

const filter = selectedCategory === "All" ? items : newFilter

console.log(selectedCategory)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={changeHandler} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
