import React from "react";
import Product from "./Product";
import { connect } from "react-redux";

function Products({ products }) {
  return (
    <div class="container">
    <div class="row">
    <div className="products" class="row">
      {products.map((prod) => (
        <Product key={prod.id} productData={prod}/>
      ))}
    </div>
    </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);

{
  /* <div class="container">
        <div class="row my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Dui augue lectus</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa leo
              nec ultrices sit risus nisi non fermentum morbi. Tristique.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
  <div class="row">
    <div class="col">
    <div class="card">
    <img class="product-img" src={process.env.PUBLIC_URL + '/EM-1010.png'} alt="em-1010" />
    <div class="card-body">
    <h5 class="card-title">EM-1010</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    <button class="btn btn-primary card-link" >Order</button>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card">
    <img class="product-img" src={process.env.PUBLIC_URL + '/TC-1501.png'} alt="TC-1501" />
  <div class="card-body">
    <h5 class="card-title">TC-1501</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    <button class="btn btn-primary card-link" type="submit">Order</button>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card">
    <img class="product-img" src={process.env.PUBLIC_URL + '/MT-1501.png'} alt="MT-1501" />
  <div class="card-body">
    <h5 class="card-title">MT-1501</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
  <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    <button class="btn btn-primary card-link" type="submit">Order</button>
  </div>
  
</div>

    </div>
  </div>
</div>v */
}
