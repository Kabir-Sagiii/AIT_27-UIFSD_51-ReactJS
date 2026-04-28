import { legacy_createStore } from "redux";
import nameReducer from "../reducers/nameReducer";
const myStore = legacy_createStore(nameReducer);

myStore.subscribe(() => {
  console.log(myStore.getState());
});

export default myStore;
