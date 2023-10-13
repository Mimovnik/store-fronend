const SizeVariantInput = (props) => {
  const size = props.size;
  const productName = props.productName;
  const sizeVariants = props.sizeVariants;
  const setSizeVariants = props.setSizeVariants;

  return (
    <div className="size-variant">
      <label>{size}</label>
      <input
        type="checkbox"
        value={sizeVariants.find((sizeVariant) => sizeVariant.size === size)}
        onChange={(e) => {
          if (e.target.checked) {
            setSizeVariants([
              ...sizeVariants,
              {
                size: size,
                quantity: 0,
                identifier: productName + "_" + size,
              },
            ]);
          } else {
            setSizeVariants(
              sizeVariants.filter((sizeVariant) => sizeVariant.size !== size)
            );
          }
        }}
      />
      {sizeVariants.find((sizeVariant) => sizeVariant.size === size) && (
        <div>
          <label>Quantity</label>
          <input
            type="text"
            required
            value={
              sizeVariants.find((sizeVariant) => sizeVariant.size === size)
                .quantity
            }
            onChange={(e) =>
              setSizeVariants(
                sizeVariants.map((sizeVariant) => {
                  if (sizeVariant.size === size) {
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
              sizeVariants.find((sizeVariant) => sizeVariant.size === size)
                .identifier
            }
            onChange={(e) =>
              setSizeVariants(
                sizeVariants.map((sizeVariant) => {
                  if (sizeVariant.size === size) {
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
  );
};

export default SizeVariantInput;
