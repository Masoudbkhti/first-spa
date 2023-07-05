import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Route, Router } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <Router>
        <Route path="/" element={Home} />
        <Route path="/products" element={Products} />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact} />
      </Router> */}
    </>
  );
}

export default App;
