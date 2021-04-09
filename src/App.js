import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navigation />
        </header>
      </div>
    </Router>
  );
}

export default App;
