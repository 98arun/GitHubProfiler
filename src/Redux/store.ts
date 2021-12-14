import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducer";
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);

export default store;
