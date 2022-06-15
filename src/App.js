// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Views/home/home";
import Navigation from "./Components/Stateful/Navigation/Navigation";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Home />
      </Router>
    </div>
  );
}

export default App;
