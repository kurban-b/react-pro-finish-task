import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import imagesReducer from "./imagesReducer";
import publicationReducer from "./publicationReducer";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  images: imagesReducer,
  publication: publicationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
