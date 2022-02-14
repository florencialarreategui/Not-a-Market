import { useState, useEffect } from "react";
import Tarjeta from "./components/Tarjeta";
import Footer from "./components/Footer";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';




const App = () =>{
  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
   
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=iphone`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.results);
      });
  }, []);

return(

  <div className="Contenedor">

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           Not a Market
          </Typography>
          </Toolbar>
      </AppBar>
    </Box>
    
    
        <Box sx={{ bgcolor: '#cfe8fc', display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
            
               {productos.map(prod =>(
                 <Tarjeta imagen={prod.thumbnail}
                 nombre ={prod.name}
                 precio={prod.price}  />

               ))}
                    
              
           </Box>
      
      
    
   <Footer/>
     
      
    </div>

);
};
export default App;
