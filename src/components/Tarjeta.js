import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { MdBookmark } from "react-icons/md";

const Tarjeta = ({ nombre, imagen, precio, descripcion }) => {
  return (
    <Card sx={{ maxWidth: 250, m: 2, p: 1.5 }}>
      <CardActionArea>
        <CardMedia component="img" image={imagen} height="150" />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          $ {precio}
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Guardar</Button>
          <Button variant="contained" size="small">
            Comprar
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Tarjeta;
