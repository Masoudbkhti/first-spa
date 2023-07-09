import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { ProductDetails } from "./components/ProductDetails";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
function App() {
  const products = {
    sizif: {
      title: "Der Mythos des Sisyphos",
      img: "../src/assets/images/sizif.jpg",
      price: "18 Euro",
    },
    ikigai: {
      title: "Ikigai",
      img: "../src/assets/images/ikigay.jpg",
      price: "25 Euro",
    },
    ablah: {
      title: "Der Idiot",
      img: "../src/assets/images/ablah.jpg",
      price: "29 Euro",
    },
    ansuyemarg: {
      title: "Jenseits des todes",
      img: "../src/assets/images/ansuyemarg.jpg",
      price: "19 Euro",
    },
    mana: {
      title: "Ja zum Leben",
      img: "../src/assets/images/mana.jpg",
      price: "39 Euro",
    },
    badbadakbaz: {
      title: "Drachenläufer",
      img: "../src/assets/images/badbadakbaz.jpg",
      price: "49 Euro",
    },
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetails products={products} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
