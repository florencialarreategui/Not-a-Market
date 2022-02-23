import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DetalleProducto = () => {
  const params = useParams() 
  const [productoId, setProductoId] = useState([])

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${params.id}`)
    .then(res => res.json())
    .then(data => setProductoId(data))
  }, [] )

  
  return (

    
    <Card sx={{ maxWidth: 250,
      m: 2,
       p: 1.5,
      }} >
 <CardActionArea>        
           <CardMedia
             component="img"
             image = {productoId.thumbnail}
             height= "150"
         
           />
           
           <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               {productoId.title}
             </Typography>
             $ {productoId.price}
             <Typography variant="body2" color="text.secondary">
               {descripcion}
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