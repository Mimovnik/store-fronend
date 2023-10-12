import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import ProductDetails from "./ProductDetails";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useFetch(`http://localhost:5036/products/${id}`);

  return (
    <div className="product-details">
      <button onClick={() => window.history.back()}>Go back</button>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {product && <ProductDetails product={product} />}
    </div>
  );
};

export default ProductDetailsPage;
