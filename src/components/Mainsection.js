import Box from "@mui/material/Box";
import Tarjeta from "./Tarjeta";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MainSection = ({}) => {
  const [productos, setProductos] = useState([]);
  const [valorInput, setValorInput] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const handleClick = () => {
    setBusqueda(valorInput);
  };

  const handleChange = (e) => {
    setValorInput(e.target.value);
    console.log(valorInput);
  };

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.results);
      });
  }, [busqueda]);

  return (
    <div>
      <Navbar clickBoton={handleClick} cambioInput={handleChange} />

      <Box
        sx={{
          bgcolor: "#ff9800",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {productos.map((prod) => (
          <Link to={`/productos/${prod.id}`}>
            <Tarjeta
              imagen={prod.thumbnail}
              nombre={prod.title}
              precio={prod.price}
              key={prod.id}
            />
          </Link>
        ))}
      </Box>
    </div>
  );
};

export default MainSection;
