import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App container">
      <Weather defaultCity="Lisbon" />

      <footer>
        Coded by <a href="#">Lívia A.</a> Check out the{" "}
        <a href="#">open-sourced code</a>
      </footer>
    </div>
  );
}

export default App;
