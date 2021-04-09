import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route path="/"></Route>

            <Route path="/"></Route>

            <Route path="/"></Route>

            <Route path="/"></Route>
          </Switch>
        </main>
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
