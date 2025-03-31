import { Card } from "../ui/Card";
import { CardContent } from "../ui/CardContent";
import Button from "../ui/Button";
import { Star, CheckCircle, XCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import RatingStars from "./RatingStars";

const ProductDetail = () => {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetchProducts(`http://localhost:5000/products/${id}`);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product.</p>;
  if (!product) return <p>Product not found.</p>;
  return (
    <div className="min-h-screen flex justify-center items-center px-4 mt-2">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg mb-2">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full md:w-1/3 shadow-md"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-600 mt-2">
              A short, compelling product tagline.
            </p>
            <div className="flex items-center mt-4 mb-4">
              <RatingStars
                rating={
                  product.averageRating
                    ? product.averageRating.toFixed(2)
                    : "0.00"
                }
              />
            </div>
            <span className="text-xl font-bold text-green-600 mr-4">
              ${product.price ? product.price.toLocaleString() : "N/A"}
            </span>
            <div className="flex space-x-2 mt-4">
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
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Pros</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" /> Excellent
                  build quality
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" /> Great battery
                  life
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" /> Fast
                  performance
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Cons</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <XCircle className="text-red-500 mr-2" /> Expensive
                </li>
                <li className="flex items-center">
                  <XCircle className="text-red-500 mr-2" /> Limited color
                  options
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">In-Depth Review</h2>
          <p className="text-gray-700 mt-4">
            The product offers outstanding build quality and performance. It is
            ideal for those who need a high-performance device. However, its
            high price may be a barrier for budget-conscious buyers.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4">Comparison</h2>
          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">Feature</th>
                <th className="p-2">This Product</th>
                <th className="p-2">Competitor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2">Battery Life</td>
                <td className="p-2">10 hours</td>
                <td className="p-2">8 hours</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">Weight</td>
                <td className="p-2">1.2kg</td>
                <td className="p-2">1.5kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
