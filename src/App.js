import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Views/Product/Product";
import Home from "./Views/home/home";
import Navigation from "./Components/Stateful/Navigation/Navigation";
import Footer from "./Components/Stateless/Footer/Footer";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" match element={<Home />} />
          <Route path="/products/" match element={<p>products</p>} />
          <Route path="/product/:id" match element={<Product />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
        {/* {console.log(location)} */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
