import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Home from "./components/Home";
import TarjetaDetalle from "./components/TarjetaDetalle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<MainSection />} />
        <Route path="/productos/:idProducto" element={<TarjetaDetalle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
