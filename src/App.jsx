import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
