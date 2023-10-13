import Navbar from "./Navbar";
import Home from "./Home";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import ProductDetailsPage from "./ProductDetailsPage";
import Footer from "./Footer";
import ProductCreationPage from "./ProductCreationPage";

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
            <Route path="/products/create" Component={ProductCreationPage} />
            <Route path="/privacy-policy" Component={PrivacyPolicyPage} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
