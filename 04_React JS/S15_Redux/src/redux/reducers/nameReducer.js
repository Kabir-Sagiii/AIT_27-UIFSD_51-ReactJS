const nameReducer = (state, action) => {
  if (action.type === "name") {
    state = action.payload;
  }
  return state;
};

export default nameReducer;
