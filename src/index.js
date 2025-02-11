import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { HashRouter } from 'react-router-dom';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UserStore from './stores/user.store';
import AuthService from './services/auth.service';
import FoodsService from './services/foods.service';
import FoodsStore from './stores/foods.store';

const services = {};
const stores = {};

stores.routerStore = new RouterStore();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.routerStore);

services.authService = new AuthService();
services.FoodsService = new FoodsService(stores.routerStore);

stores.userStore = new UserStore(services.authService);
stores.foodsStore = new FoodsStore(services.FoodsService);

const Root = (
  <Provider {...stores}>
    <HashRouter history={history}>
      <App />
    </HashRouter>
  </Provider>
);
ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
