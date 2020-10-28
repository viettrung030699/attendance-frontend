import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

// import logo from './logo.svg';
import './App.scss';
import LecturerLayout from './hoc/Layout/LecturerLayout/LecturerLayout';
import Dashboard from './containers/Lecturer/Dashboard/Dashboard';
import AdminSession from './containers/Lecturer/Session/AdminSession';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <LecturerLayout>
          {/* <header>
            <img src={logo} className="App-logo" alt="logo" />
            <p className="Title">{props.title}</p>
          </header> */}
          <Switch>
            <Route exact path='/lecturer/' component={Dashboard} />
            <Route path='/lecturer/session' component={AdminSession} />
            <Redirect exact from='/' to='/lecturer/' />
            <Route render={() => <h1>404 Not Found!!!</h1>} />
          </Switch>
        </LecturerLayout>
      </div>
    </BrowserRouter>

  );
}

export default App;
