import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
import './App.scss';
import Dashboard from './containers/Dashboard';



function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <header>
          <img src={logo} className="App-logo" alt="logo" />
          <p className="Title">{props.title}</p>
        </header> */}
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route render={() => <h1>404 Not Found!!!</h1>} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
