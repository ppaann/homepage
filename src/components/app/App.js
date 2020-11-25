import logo from "../../assets/images/logo.svg";
import "./App.css";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div className="button">
          <Button type="primary">Ant Button</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
