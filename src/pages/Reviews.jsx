import { useCategory } from "../context/ContextCategory";
import useFetchProducts from "../hooks/useFetchProducts";

const Reviews = () => {
  const {
    data: reviews,
    loading,
    error,
  } = useFetchProducts("http://localhost:5000/reviews");
  const { selectedCategory, setCategory } = useCategory();

  const categories = ["All", ...new Set(reviews.map((p) => p.category))];

  const filteredReviews =
    selectedCategory === "All"
      ? reviews
      : reviews.filter((p) => p.category === selectedCategory);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="max-w-6xl mx-auto text-center mb-8">
        <p className="text-black mt-2 text-2xl font-bold">
          Stay updated with the latest news and trends across various
          categories.
        </p>
        <div
          className="mt-4 flex
                justify-center
                space-x-4"
        >
          {categories.map((category) => (
            <span
              key={category}
              onClick={() => setCategory(category)}
              className={`
                text-blue hover:underline cursor-pointer 
                ${
                  selectedCategory === category
                    ? " text-blue-500 font-bold "
                    : " text-gray-700 "
                }
              `}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
        {filteredReviews.map((review, index) => (
          <div key={index} className="bg-white p-4  shadow-lg">
            <img
              src={review.imageUrl}
              alt="Image"
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl font-bold mt-4">{review.title}</h2>
            <p className="text-gray-500 text-sm">
              {review.date} • {review.author}
            </p>
            <p className="text-gray-700 mt-2">{review.brief}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
