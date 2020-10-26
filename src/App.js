import logo from './logo.svg';
import './App.scss';

function App(props) {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.title}</p>
      </header>
    </div>
  );
}

export default App;
