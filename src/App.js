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
          <Dictionary defaultKeyword="dictionary" />
        </main>

        <footer className="text-center">
          Hosted with <a href="https://www.netlify.com">Netlify</a>|
          <a
            href="https://github.com/Carla-Margara/dictionary-app"
            title="GitHub Repository link"
          >
            Open-Sourced
          </a>{" "}
          and Coded with <span className="heart">❤</span> by Carla Margara
        </footer>
      </div>
    </div>
  );
}
