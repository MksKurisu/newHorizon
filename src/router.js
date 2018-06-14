import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import Classfication from './Classfication';
import classDetail from'./ClassDetail'
import Media from './Media'
import Shop from './Shop'

class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/classfication' component={Classfication} />
          <Route path='/classDetail' component={classDetail} />
          <Route path='/Media' component={Media} />
          <Route path='/Shop' component={Shop} />
          <Redirect from='/' to='/home'></Redirect>
        </Switch>
      </Router>
    );
  }
}
export default Root;