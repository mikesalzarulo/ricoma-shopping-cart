import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "EM-1010",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.",
      price: 5999.0,
      image: (
        <img
          class="product-img"
          src={process.env.PUBLIC_URL + "/EM-1010.png"}
          alt="em-1010"
        />
      ),
    },
    {
      id: 2,
      title: "TC-1501",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.",
      price: 7999.0,
      image: (
        <img
          class="product-img"
          src={process.env.PUBLIC_URL + "/TC-1501.png"}
          alt="TC-1501"
        />
      ),
    },
    {
      id: 3,
      title: "MT-1501",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.",
      price: 8999.0,
      image: (
        <img
          class="product-img"
          src={process.env.PUBLIC_URL + "/MT-1501.png"}
          alt="MT-1501"
        />
      ),
    },
  ], //{id, title, description, price, img}
  cart: [], //{id, title, description, price, img, qty}
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);

      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actionTypes.ADJUST_QTY:
      return {
          ...state,
          cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
          ...state,
          currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
