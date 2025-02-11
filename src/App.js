import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import SignInPage from './pages/signin/SignInPage';
import SignUpPage from './pages/signup/SignUpPage';
import FoodsPage from './pages/foods/FoodsPage';
import CreateFoodPage from './pages/create-food/CreateFoodPage';

@inject('routerStore')
@observer
class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={SignInPage} />
        <Route path="/signin/" component={SignInPage} />
        <Route path="/signup/" component={SignUpPage} />
        <Route exact path="/foods" component={FoodsPage} />
        <Route exact path="/foods/create" component={CreateFoodPage} />
      </Fragment>
    );
  }
}

export default App;
