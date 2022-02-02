import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function clickHandler() {
    setInCart(inCart => !inCart)
  }

  const liClass = inCart ? 'in-cart' : ''
  const inCartText = inCart ? 'Remove From Cart' : 'Add to Cart'
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={clickHandler} className="add">{inCartText}</button>
    </li>
  );
}

export default Item;
