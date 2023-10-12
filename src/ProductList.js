import { useNavigate } from "react-router-dom";

const ProductList = (props) => {
  const products = props.products;
  const title = props.title;
  const navigate = useNavigate();

  const goToDetails = (id) => () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="product-list">
      <h2>{title}</h2>
      {products.map((product) => (
        <div
          className="product-preview"
          key={product.id}
          onClick={goToDetails(product.id)}
        >
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>Price</h3>
          <p>{product.price} pln</p>
          <h3>Sizes:</h3>
          {product.sizeVariants.map((sizeVariant) => (
            <div className="size-variant" key={sizeVariant.identifier}>
              <p>{sizeVariant.size}</p>
              <p>{sizeVariant.quantity}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
