import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import Classfication from './Classfication';

class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route path='/classfication' component={Classfication}/>
          <Redirect from='/' to='/home'></Redirect>
        </Switch>
      </Router>
    );
  }
}
export default Root;