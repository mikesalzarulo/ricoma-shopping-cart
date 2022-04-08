import React from "react";

function CartItem(itemData) {
  return ( 
    <div class="container">
    <div class="row">
    <div class="card">
    {itemData.img}
    <div class="card-body">
      <p class="card-text">{itemData.title}</p>
      <p>{itemData.price}</p>
    </div>
    <div>
    </div>
  </div>
  </div>
  </div>
  
  )}

export default CartItem;
