import {legacy_createStore,combineReducers,compose,applyMiddleware} from "redux";
import { counterreducer } from "../compoents/Reducer";
import { todoreducer } from "../Todo/TodoReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootreducer=combineReducers({
    counter:counterreducer,
    todo:todoreducer,
})

export const store =legacy_createStore(rootreducer,
    composeEnhancers(applyMiddleware())
    );
  

    