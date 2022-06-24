// import logo from './logo.svg';
// import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Views/home/home";
import Navigation from "./Components/Stateful/Navigation/Navigation";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" match element={<Home />} />
          <Route path="/products/" match element={<p>products</p>} />
          <Route path="/products/*" match element={<p>products with id</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
