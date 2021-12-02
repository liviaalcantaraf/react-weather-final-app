import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App container">
      <Weather defaultCity="Lisbon" />

      <footer>
        <a
          href="https://www.linkedin.com/in/liviaalcantaraf/"
          target="_blank"
          rel="nopener noreferrer"
        >
          Open-sourced code
        </a>{" "}
        {"  "}
        by Lívia A.
      </footer>
    </div>
  );
}

export default App;
