export function cartActionCreator(data) {
  return {
    type: "cart",
    payload: data,
  };
}

export function removeCartActionCreator(id) {
  return {
    type: "remove-cart",
    payload: id,
  };
}
