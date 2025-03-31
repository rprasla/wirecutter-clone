import { useState } from "react";
import RatingStars from "./RatingStars";
import RatingInput from "./RatingInput";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const [averageRating, setAverageRating] = useState(
    product.averageRating || 0
  );
  const [totalReviews, setTotalReviews] = useState(product.totalReviews || 0);

  const handleNewRating = async (newRating) => {
    const updatedTotalReviews = totalReviews + 1;
    const updatedAverageRating =
      (averageRating * totalReviews + newRating) / updatedTotalReviews;

    setAverageRating(updatedAverageRating.toFixed(2));
    setTotalReviews(updatedTotalReviews);

    const updatedProduct = {
      ...product,
      averageRating: updatedAverageRating,
      totalReviews: updatedTotalReviews,
    };

    try {
      const response = await fetch(
        `http://localhost:5000/products/${product.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product rating.");
      }

      console.log("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100 gap-6">
      <div className="w-full md:w-1/2 bg-white p-6  shadow-lg flex justify-center items-center h-69 relative">
        <Link
          to={`/product/${product.id}`}
          className="text-blue-500 hover:underline"
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-w-full h-50 object-cover "
          />
        </Link>
        {product.badge && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1">
            {product.badge}
          </div>
        )}
      </div>

      <div className="w-full md:w-1/2 bg-white p-6  shadow-lg text-center md:text-left">
        <div className="mb-4">
          <Link
            to={`/product/${product.id}`}
            className="text-blue-500 hover:underline"
          >
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
          </Link>
          <p className="text-gray-600 text-lg">{product.brand}</p>

          <div className="flex items-center mt-2">
            <RatingStars
              rating={
                product.averageRating
                  ? product.averageRating.toFixed(2)
                  : "0.00"
              }
            />
            <span className="ml-4 text-gray-500 text-sm">
              {product.totalReviews} Reviews
            </span>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{product.shortDescription}</p>

        <div className="flex items-center mb-4">
          <span className="text-xl font-bold text-green-600 mr-4">
            ${product.price ? product.price.toLocaleString() : "N/A"}
          </span>
          <div className="flex space-x-2">
            {product.buyLinks.map((link, index) => (
              <Button
                key={index}
                href={link.url}
                className="bg-blue-500 text-white px-3 py-1  text-sm hover:bg-black transition"
              >
                Buy at {link.name}
              </Button>
            ))}
          </div>
        </div>

        <Button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 hover:text-black font-medium"
        >
          {expanded ? "Hide Details" : "Show Full Review"}
        </Button>

        {expanded && (
          <div className="mt-4 bg-gray-50 p-4 ">
            <p className="mb-4 text-gray-800">{product.longDescription}</p>

            <div className="flex">
              <div className="w-1/2 pr-4">
                <h3 className="font-semibold text-green-700 mb-2">Pros</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {product.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="w-1/2">
                  <h3 className="font-semibold text-red-700 mb-2">Cons</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {product.cons.map((con, index) => (
                      <li key={index}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <RatingInput onRate={handleNewRating} />
      </div>
    </div>
  );
};

export default ProductCard;
