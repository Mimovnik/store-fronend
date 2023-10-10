const ProductList = (props) => {
  const products = props.products;
  const title = props.title;

  return (
    <div className="product-list">
      <h2>{title}</h2>
      {products.map((product) => (
        <div className="product-preview" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>Price</h3>
          <p>{product.price} pln</p>
          <h3>Weight</h3>
          <p>{product.weightInGrams} grams</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
