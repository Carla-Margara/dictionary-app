import logoWhite from "./margara-simple-logo-white.png";
import background from "./yellow-leather.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="App">
      <div className="container">
        <header className="App-header">
          <div className="row">
            <div className="col-4">
              <img src={logoWhite} className="App-logo img-fluid" alt="logo" />{" "}
            </div>
            <div className="col-8">
              {" "}
              <span className="App-quote">
                <em>
                  Every time I have to look up a word in the dictionary, I'm
                  delighted.
                </em>
                - <strong>Vivienne Westwood</strong>
              </span>
            </div>
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="word" />
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
