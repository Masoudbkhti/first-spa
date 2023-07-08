import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products:id" element={<Card />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
