const BookItem = ({ item }) => {
  const { bookTitle, authorName, bookDescription, imageURL, price } = item;
  return (
    <div className="card lg:card-side bg-gray px-12 shadow-xl mb-20 bg-gradient-to-r from-indigo-500 drop-shadow-lg">
      <figure>
        <img src={imageURL} alt="" />
      </figure>
      <div className="card-body flex text-justify">
        <h2 className="card-title text-white text-mono text-5xl">
          {bookTitle}
        </h2>
        <h3 className="text-white ">{authorName}</h3>
        <p>{bookDescription}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{price}</button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
