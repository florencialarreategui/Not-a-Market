import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Tarjeta = ({ nombre, imgen, precio, descripcion }) => {
  return (
    
    <Card sx={{ maxWidth: 250,
                 m: 2,
                  p: 1.5,
                 }} >
                      <CardMedia
                        component="img"
                    
                        height= "150"
                    
                      />
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
                        <Button variant="contained" size="small">Comprar</Button>
                        <Button size="small">Guardar</Button>
                      </CardActions>
                    </Card>



  );
};

export default Card;