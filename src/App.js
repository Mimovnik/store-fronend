import Navbar from "./Navbar";
import Home from "./Home";
import PrivacyPolicy from "./PrivacyPolicy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import ProductDetailsPage from "./ProductDetailsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/products" Component={ProductsPage} />
            <Route path="/products/:id" Component={ProductDetailsPage} />
            <Route path="/privacy-policy" Component={PrivacyPolicy} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
