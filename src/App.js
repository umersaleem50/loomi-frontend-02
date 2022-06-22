// import logo from './logo.svg';
// import './App.css';
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Views/home/home";
import Navigation from "./Components/Stateful/Navigation/Navigation";
function App() {
  axios("/api/v1/products").then((res) => console.log(res));
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
