import { Header, Home, Footer, Card, Products } from "./components/";
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
