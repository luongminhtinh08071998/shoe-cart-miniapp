import ShoeItem from './ShoeItem';

const ShoeList = ({ shoes, handleShoeItem }) => {
  return (
    <div className="shoe-list">
      {shoes.map((shoe) => (
        <ShoeItem
          key={shoe.id}
          shoeItem={shoe}
          handleShoeItem={handleShoeItem}
        />
      ))}
    </div>
  );
};

export default ShoeList;
