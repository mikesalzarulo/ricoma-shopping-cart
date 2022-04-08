import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import CartItem from './CartItem';


function Cart({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
      let items = 0;
      let price = 0;
      cart.forEach(item => {
        items += item.qty;
        price += item.qty * item.price;
      })
      setTotalPrice(price);
      setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">Cart</h1>
        <div class="row">
        <div class="row">
        {cart.map((item) => (
          <CartItem key={item.id} itemData={item}/>
        ))}
        </div>
        </div>
        <span>TOTAL: ({totalItems} items)</span>
        <span>${totalPrice} </span>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.shop.cart
  };
}

export default connect(mapStateToProps)(Cart);