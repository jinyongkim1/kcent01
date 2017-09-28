import 'materialize-css/dist/css/materialize.min.css';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import reducers from './reducers';
import axios from 'axios';
window.axios = axios;



// second argument is relevant when you're doing serverside rendering (set initial state)
// put dummy redux inside to just make it work for now
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector("#root")
);
