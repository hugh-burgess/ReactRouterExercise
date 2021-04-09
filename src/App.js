import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Characters from "./components/Characters";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Navigation />
        </header>
        <main className="main">
          <Switch>
            <Route path="/characters">
              <Characters />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <footer className="footer">Made with ❤️ by Hugh</footer>
      </div>
    </Router>
  );
}

export default App;
