import { Link } from "react-router-dom";
import { useState } from "react";

const ProductCreationPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [weight, setWeight] = useState(0);
  const [sizeVariants, setSizeVariants] = useState([]);

  return (
    <div className="product-creation">
      <div className="links">
        <Link to="/products">Go back to products</Link>
      </div>
      <div className="creation-form">
        <h2>Create new product</h2>
        <form>
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
          <div className="size-variant">
            <label>Universal</label>
            <input
              type="checkbox"
              value={sizeVariants.find(
                (sizeVariant) => sizeVariant.size === "Universal"
              )}
              onChange={(e) => {
                if (e.target.checked) {
                  setSizeVariants([
                    ...sizeVariants,
                    {
                      size: "Universal",
                      quantity: 0,
                      identifier: name + "_Universal",
                    },
                  ]);
                } else {
                  setSizeVariants(
                    sizeVariants.filter(
                      (sizeVariant) => sizeVariant.size !== "Universal"
                    )
                  );
                }
              }}
            />
            {sizeVariants.find(
              (sizeVariant) => sizeVariant.size === "Universal"
            ) && (
              <div>
                <label>Quantity</label>
                <input
                  type="text"
                  required
                  value={
                    sizeVariants.find(
                      (sizeVariant) => sizeVariant.size === "Universal"
                    ).quantity
                  }
                  onChange={(e) =>
                    setSizeVariants(
                      sizeVariants.map((sizeVariant) => {
                        if (sizeVariant.size === "Universal") {
                          return {
                            ...sizeVariant,
                            quantity: e.target.value,
                          };
                        }
                      })
                    )
                  }
                />
                <label>Identifier</label>
                <input
                  type="text"
                  required
                  value={
                    sizeVariants.find(
                      (sizeVariant) => sizeVariant.size === "Universal"
                    ).identifier
                  }
                  onChange={(e) =>
                    setSizeVariants(
                      sizeVariants.map((sizeVariant) => {
                        if (sizeVariant.size === "Universal") {
                          return {
                            ...sizeVariant,
                            identifier: e.target.value,
                          };
                        }
                      })
                    )
                  }
                />
              </div>
            )}
          </div>
          <button>Create</button>
        </form>
      </div>
    </div>
  );
};

export default ProductCreationPage;
