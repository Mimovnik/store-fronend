import Navbar from "./Navbar";
import Home from "./Home";
import PrivacyPolicy from "./PrivacyPolicy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Products";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/products" Component={Products} />
            <Route path="/privacy-policy" Component={PrivacyPolicy} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
