// import logo from './logo.svg';
import './App.scss';
import Dashboard from './containers/Dashboard';

function App(props) {
  return (
    <div className="App">
      {/* <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.title}</p>
      </header> */}
      <Dashboard />
    </div>
  );
}

export default App;
