const ShoeItem = ({ handleShoeItem, shoeItem }) => {
  const {
    name = '',
    color = '',
    image = '',
    description = '',
    price = 0,
  } = shoeItem;

  return (
    <div className="shoe-item">
      <div className="shoe-item--image" style={{ backgroundColor: color }}>
        <img alt={name} src={image} />
      </div>
      <div className="shoe-item--name">{name}</div>
      <div className="shoe-item--description">{description}</div>
      <div className="shoe-item--footer">
        <div className="shoe-item--price">${price}</div>
        <div className="shoe-item--button" onClick={handleShoeItem(shoeItem)}>
          <p>ADD TO CART</p>
        </div>
      </div>
    </div>
  );
};

export default ShoeItem;
