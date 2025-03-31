import { useState } from "react";
import Button from "../ui/Button";

const RatingInput = ({ onRate }) => {
  const [rating, setRating] = useState(0);

  const handleChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRate(parseFloat(rating));
      setRating(0);
    } else {
      alert("Rating must be between 1 and 5.");
    }
  };

  return (
    <div className="flex items-center space-x-2 mt-4">
      <select
        value={rating}
        onChange={handleChange}
        className="border border-gray-300  p-2"
      >
        <option value={0}>Select rating</option>
        {[1, 2, 3, 4, 5].map((star) => (
          <option key={star} value={star}>
            {star} Star{star > 1 ? "s" : ""}
          </option>
        ))}
      </select>
      <Button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-3 py-1  text-sm hover:bg-black transition"
      >
        Submit Rating
      </Button>
    </div>
  );
};

export default RatingInput;
