import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

// import logo from './logo.svg';
import './App.scss';
import AdminLayout from './hoc/Layout/AdminLayout/AdminLayout';
import Dashboard from './containers/Dashboard/Dashboard';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <AdminLayout>
          {/* <header>
            <img src={logo} className="App-logo" alt="logo" />
            <p className="Title">{props.title}</p>
          </header> */}
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route render={() => <h1>404 Not Found!!!</h1>} />
          </Switch>
        </AdminLayout>
      </div>
    </BrowserRouter>

  );
}

export default App;
