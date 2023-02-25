import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/page/ProductDetail";
import NewArivals from "./components/NewArivals";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <NewArivals />
      <Routes>
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
