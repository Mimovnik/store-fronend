import ProductList from "./ProductList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("http://localhost:5036/products");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {products && <ProductList products={products} title="All products" />}
      {products && (
        <ProductList
          products={products.filter((product) => product.price <= 200)}
          title="Cheap products"
        />
      )}
    </div>
  );
};

export default Home;
