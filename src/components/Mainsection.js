import Box from '@mui/material/Box';
import Home from "./Home";
import Tarjeta from "./Tarjeta"

import { useEffect, useState } from "react";

const MainSection = ({busqueda}) =>{

    const [productos, setProductos] = useState([]);

    useEffect(() => {
   
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
          .then((res) => res.json())
          .then((data) => {
            setProductos(data.results);
          });
      }, [busqueda]);

return(
 
    <Box sx={{ bgcolor: '#ff9800', display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
                    
                    {productos.map(prod =>(
                    <Tarjeta imagen={prod.thumbnail}
                    nombre ={prod.name}
                    precio={prod.price}
                    key={prod.id} />

                        ))}

                      {productos.length === 0 && <Home></Home>}

                  </Box>    

);


};

export default MainSection;