import useFetchProducts from "../hooks/useFetchProducts";

const BestPicks = () => {
  const {
    data: deals,
    loading,
    error,
  } = useFetchProducts("http://localhost:5000/deals");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="py-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="bg-white  shadow-lg overflow-hidden p-4"
          >
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {deal.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{deal.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-800">
                  {deal.price}
                </span>
                <a
                  href={deal.link}
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  See Deal
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestPicks;
