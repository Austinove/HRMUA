import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "../reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

export const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const loggerMiddleware = createLogger();
const middlewares = [routeMiddleware, loggerMiddleware, thunk];

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const initialState = {};
const store = createStore(
  createRootReducer(history),
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);
export default store;
