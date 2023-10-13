import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import useFetch from "./useFetch";

const ProductsPage = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("http://localhost:5036/products");

  return (
    <div className="products">
      <div className="links">
        <Link to="/products/create">Create new product</Link>
      </div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {products && <ProductList products={products} title="All products" />}
      {products && (
        <ProductList
          products={products.filter((product) => product.price <= 200)}
          title="Products under 200 pln"
        />
      )}
    </div>
  );
};

export default ProductsPage;
