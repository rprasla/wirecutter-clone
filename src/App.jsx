import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BestPicks from "./pages/BestPicks";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";
import Wirecutter from "./components/Wirecutter";
import ProductDetail from "./components/ProductDetail";
import { CategoryProvider } from "./context/ContextCategory";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <CategoryProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Wirecutter />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/bestpicks" element={<BestPicks />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CategoryProvider>
    </Router>
  );
}

export default App;
