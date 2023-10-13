import { Link } from "react-router-dom";

const ProductCreationPage = () => {
  return (
    <div className="product-creation">
      <div className="links">
        <Link to="/products">Go back to products</Link>
      </div>
      <div className="creation-form">
        <h2>New product</h2>
      </div>
    </div>
  );
};

export default ProductCreationPage;
