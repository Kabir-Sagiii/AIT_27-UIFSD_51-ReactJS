const nameReducer = (state = { name: "", cart: [] }, action) => {
  if (action.type === "name") {
    state = {
      ...state,
      name: action.payload,
    };
  } else if (action.type === "cart") {
    state = {
      ...state,
      cart: [...state.cart, action.payload],
    };
  } else if (action.type === "remove-cart") {
    state = {
      ...state,
      cart: state.cart.filter((cart) => {
        return cart.id !== action.payload;
      }),
    };
  }
  return state;
};

export default nameReducer;
