import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
          <Route path="/product/*" match element={<p>product with id</p>} />
          {/* <Route path="/user" element={<Footer></Footer>} /> */}
        </Routes>
        {/* {console.log(location)} */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
