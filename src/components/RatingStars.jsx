const RatingStars = ({ rating, size = 20 }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={index < Math.floor(rating) ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            className={`
                ${
                  index < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"
                } 
                ${
                  index === Math.floor(rating) && rating % 1 !== 0
                    ? "text-yellow-300"
                    : ""
                }
              `}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
        <span className="ml-2 text-gray-600 text-sm">({rating})</span>
      </div>
    );
  };
  
  export default RatingStars;
  