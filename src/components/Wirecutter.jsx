import { useCategory } from "../context/ContextCategory";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "./ProductCard";

const Wirecutter = () => {
  const { selectedCategory, setCategory } = useCategory();
  const {
    data: products,
    loading,
    error,
  } = useFetchProducts("http://localhost:5000/products");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      <aside className="hidden md:block md:col-span-1 bg-white p-4 shadow">
        <h2 className="text-3xl font-semibold mb-4 ">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setCategory(category)}
              className={`
                text-blue text-xl hover:underline cursor-pointer 
                ${
                  selectedCategory === category
                    ? " text-blue-500 font-bold "
                    : " text-gray-700 "
                }
              `}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      <section className="md:col-span-3 space-y-6">
        <div className="grid grid-cols-1 gap-4">
          {filteredProducts.map((product) => (
            <div>
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 shadow">
                <img
                  className="w-32 h-32 object-contain"
                  src={product.imageUrl}
                ></img>
                <h3 className="text-lg font-semibold">
                  Product Review {product.name}
                </h3>
                <p className="text-gray-500 mt-2">
                  A brief summary of why this product stands out.
                </p>
              </div>
            ))}
          </div> */}
      </section>
    </main>
  );
};

export default Wirecutter;
