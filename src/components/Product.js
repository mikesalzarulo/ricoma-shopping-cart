import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/Shopping/shopping-actions';

function Product( { productData, addToCart }) {
    return (
        <div class="col">
        <div class="card">
            {productData.image}
                <div class="card-body">
                    <h5 class="card-title">{productData.title}</h5>
                    <p class="card-text">{productData.description}</p>
                    <h6>${productData.price}</h6>
                    <a class="myButton" onClick={() => addToCart(productData.id)}>ORDER</a>
                </div>
        </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};

export default connect(null, mapDispatchToProps)(Product);