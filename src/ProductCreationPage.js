import { Link } from "react-router-dom";
import { useState } from "react";
import SizeVariantInput from "./SizeVariantInput";

const ProductCreationPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [weight, setWeight] = useState(0);
  const [sizeVariants, setSizeVariants] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name: name,
      description: description,
      price: price,
      weightInGrams: weight,
      sizeVariants: sizeVariants,
    };

    console.log(JSON.stringify(product));
  };

  return (
    <div className="product-creation">
      <div className="links">
        <Link to="/products">Go back to products</Link>
      </div>
      <div className="creation-form">
        <h2>Create new product</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Description:</label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label>Price:</label>
          <input
            type="text"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label>Weight (in grams):</label>
          <input
            type="text"
            required
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label>Sizes:</label>
          <SizeVariantInput
            size="Universal"
            productName={name}
            sizeVariants={sizeVariants}
            setSizeVariants={setSizeVariants}
          />
          <SizeVariantInput
            size="XS"
            productName={name}
            sizeVariants={sizeVariants}
            setSizeVariants={setSizeVariants}
          />
          <SizeVariantInput
            size="S"
            productName={name}
            sizeVariants={sizeVariants}
            setSizeVariants={setSizeVariants}
          />
          <SizeVariantInput
            size="M"
            productName={name}
            sizeVariants={sizeVariants}
            setSizeVariants={setSizeVariants}
          />
          <SizeVariantInput
            size="L"
            productName={name}
            sizeVariants={sizeVariants}
            setSizeVariants={setSizeVariants}
          />
          <SizeVariantInput
            size="XL"
            productName={name}
            sizeVariants={sizeVariants}
            setSizeVariants={setSizeVariants}
          />
          <button>Create</button>
        </form>
      </div>
    </div>
  );
};

export default ProductCreationPage;
