
const ProductCard = ({ product }:any) => {
  const { name, category, stock, brand, rating, description, price, image } = product;

  return (
    <div className="bg-white  rounded-lg   shadow-drop p-2">
      <img src={image} alt={name} className="rounded-lg mb-4" />
      <h3 className="text-xl font-semibold text-primaryColor">{name}</h3>
      <p className="text-textColor-paragraph mb-2">{category}</p>
      <p className="text-textColor-paragraph mb-2">Stock: {stock}</p>
      <p className="text-textColor-paragraph mb-2">Brand: {brand}</p>
      <div className="flex items-center mb-2">
        <span className="text-textColor-paragraph">Rating:</span>&nbsp;
        <div className="text-yellow-500 flex">
          {Array.from({ length: Math.floor(rating) }, (_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a.75.75 0 0 1 .664.414l1.546 3.828 4.106.376a.75.75 0 0 1 .416 1.279l-3.182 2.74.946 4.255a.75.75 0 0 1-1.102.824L10 14.573l-3.935 2.347a.75.75 0 0 1-1.103-.825l.946-4.254-3.182-2.74a.75.75 0 0 1 .416-1.28l4.106-.375 1.546-3.828A.75.75 0 0 1 10 2z"
              />
            </svg>
          ))}
          {rating % 1 !== 0 && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a.75.75 0 0 1 .664.414l1.546 3.828 4.106.376a.75.75 0 0 1 .416 1.279l-3.182 2.74.946 4.255a.75.75 0 0 1-1.102.824L10 14.573l-3.935 2.347a.75.75 0 0 1-1.103-.825l.946-4.254-3.182-2.74a.75.75 0 0 1 .416-1.28l4.106-.375 1.546-3.828A.75.75 0 0 1 10 2z"
              />
            </svg>
          )}
        </div>
      </div>
      <p className="text-textColor-paragraph mb-4">{description}</p>
      <p className="text-lg font-semibold text-primaryColor">${price}</p>
      <button className="mt-4 bg-primaryColor hover:bg-secondaryColor text-white px-4 py-2 rounded-md transition duration-300">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
