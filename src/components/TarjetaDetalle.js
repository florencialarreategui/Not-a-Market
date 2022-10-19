import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import { CardActionArea } from "@mui/material";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";

const TarjetaDetalle = () => {
  const params = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${params.idProducto}`
    )
      .then((res) => res.json())
      .then((data) => setProducto(data));
  }, [params.idProducto]);

  console.log(params.idProducto);
  console.log(producto);
  console.log(useEffect);

  return (
    <>
      <Navbar></Navbar>

      <Box
        sx={{
          bgcolor: "#ff9800",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <article>
          <h2>{producto.title}</h2>
          <img src={producto.thumbnail} alt={producto.title} />
          <span>${producto.price}</span>
          <p>{producto.condition}</p>
          <p> {producto.warranty}</p>
        </article>
      </Box>
    </>
  );
};

export default TarjetaDetalle;
