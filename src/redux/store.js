import { createStore } from "redux";
import OrderDetailsReducer from "./reducer";

const store = createStore(OrderDetailsReducer);
console.log(store.getState(), 'state')

export default store;