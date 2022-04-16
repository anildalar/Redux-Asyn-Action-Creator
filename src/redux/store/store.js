import { applyMiddleware, createStore } from "redux";
import initialState from "../data/data";
import { rootReducer } from "../reducers/reducers";
import thunk from 'redux-thunk'

let storeObject = createStore(rootReducer,initialState,applyMiddleware(thunk));

export default storeObject;