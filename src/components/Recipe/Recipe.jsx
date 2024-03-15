/* eslint-disable react/prop-types */
const Recipe = ({ recipe, handleAddToCart }) => {
  const {
    name,
    image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className="container mx-auto ">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{short_description}</p>
          <div>
            <hr />
          </div>
          <div>
          <h2 className="text-xl font-semibold">Ingredients: 6</h2>
            <li>  
              {ingredients.map((item, idx)=><li key={item.idx}>{item}</li>)}
            </li>
                
          </div>
          <div>
            <hr />
          </div>

          <div className="flex gap-4">
            <div className="flex gap-2">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </p>
              <p>{preparing_time}</p>
            </div>
            <div className="flex gap-2">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
              </p>
              <p>{calories}</p>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button
              onClick={() => handleAddToCart(recipe)}
              className="btn bg-[#0BE58A]"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
