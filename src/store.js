import { createStore, applyMiddleware } from "redux"
import asyncReducer from "./reducers"
import thunk from "redux-thunk"

// Middleware is a piece of code that sits between your actions and your reducers.
const store = createStore(asyncReducer, applyMiddleware(thunk))

export default store

