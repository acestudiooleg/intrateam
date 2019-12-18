import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { login } from './actions/auth';

// import { ProtectedRoute } from '@app/auth';
import { Routes } from './constants';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store';

export default class App extends React.Component {
  componentDidMount() {
    console.log('INIT');
    store.dispatch(login());
  }
  public render() {
    return (
      <div className="App">
        <ConnectedRouter history={history}>
          <Switch>
            {/* <ProtectedRoute path={Routes.Root} exact={true} component={WorkerSearch}/>
                <ProtectedRoute path={Routes.Search} component={SearchResult}/>
                <ProtectedRoute path={Routes.Instructors} component={Instructors} /> */}
            <Route path={Routes.Dashboard} exact={true} component={Dashboard} />
            <Route path={Routes.Login} exact={true} component={Login} />
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}
