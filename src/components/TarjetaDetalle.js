import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const DetalleProducto = () => {
  const params = useParams() 
  const [producto, setProducto] = useState([])

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${params.idProducto}`)
    .then(res => res.json())
    .then(data => setProducto(data))
  }, [params.idProducto] )

console.log(params.idProducto)
console.log(producto)
  
  return (

    <Card sx={{ maxWidth: 250,
      m: 2,
       p: 1.5,
      }} >
 <CardActionArea>        
           <CardMedia
             component="img"
             image = {producto.thumbnail}
             height= "150"
         
           />
           
           <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               {producto.title}
             </Typography>
             $ {producto.price}
             <Typography variant="body2" color="text.secondary">
               {producto.descripcion}
             </Typography>
           </CardContent>
           <CardActions>  
           <Button size="small">Guardar</Button>
             <Button variant="contained" size="small">Comprar</Button>
           </CardActions>
          </CardActionArea> 
         </Card>

  )
}

export default DetalleProducto