import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App container">
      <Weather defaultCity="Lisbon" />

      <footer>
        Coded by{" "}
        <a href="https://github.com/liviaalcantaraf/react-weather-final-app">
          Lívia A.
        </a>{" "}
        Check out the{" "}
        <a href="https://www.linkedin.com/in/liviaalcantaraf/">
          open-sourced code
        </a>
      </footer>
    </div>
  );
}

export default App;
