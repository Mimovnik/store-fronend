const ProductDetails = (props) => {
  const product = props.product;

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      <br />
      <h2>Name</h2>
      <p>{product.name}</p>
      <h2>Product ID</h2>
      <p>{product.id}</p>
      <h2>Description</h2>
      <p>{product.description}</p>
      <h2>Price</h2>
      <p>{product.price} pln</p>
      <h2>Weight</h2>
      <p>{product.weightInGrams} grams</p>
      <h2>Sizes:</h2>
      {product.sizeVariants.map((sizeVariant) => (
        <div className="size-variant" key={sizeVariant.identifier}>
          <h3>Size</h3>
          <p>{sizeVariant.size}</p>
          <h3>Quantity</h3>
          <p>{sizeVariant.quantity}</p>
          <h3>Identifier</h3>
          <p>{sizeVariant.identifier}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
