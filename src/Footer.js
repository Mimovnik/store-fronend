import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="footer">
      <div className="links">
        <Link to="/privacy-policy">Privacy policy</Link>
      </div>
    </nav>
  );
};

export default Footer;
