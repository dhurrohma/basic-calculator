import { rootReducer } from "./RootReducer";
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(rootReducer, composeWithDevTools())

export {store}