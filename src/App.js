import { useState, useEffect } from "react";
import Tarjeta from "./components/Tarjeta";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Mainsection from "./components/Mainsection";
import Box from '@mui/material/Box';


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

  <Navbar/>
    
       
  
  <Box sx={{ bgcolor: '#ff9800', display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
        
       {productos.map(prod =>(
      <Tarjeta imagen={prod.thumbnail}
      nombre ={prod.name}
      precio={prod.price}
       key={prod.id} />

       ))}

    
        
         
   
        </Box>
 

      
      
    
   <Footer/>
     
      
    </div>

);
};
export default App;
