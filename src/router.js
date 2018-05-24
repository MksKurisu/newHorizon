import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import Classfication from './Classfication';
import classDetail from'./ClassDetail'

class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/classfication' component={Classfication} />
          <Route path='/classDetail' component={classDetail} />
          <Redirect from='/' to='/home'></Redirect>
        </Switch>
      </Router>
    );
  }
}
export default Root;