import logoWhite from "./logoWhite.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logoWhite} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="text-center">
          Coded with <span className="heart">❤</span> by Carla Margara
        </footer>
      </div>
    </div>
  );
}
