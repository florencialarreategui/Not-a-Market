import { useState, useEffect } from "react";
import Tarjeta from "./components/Tarjeta";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Mainsection from "./components/Mainsection";
import Box from '@mui/material/Box';


const App = () =>{
  const [productos, setProductos] = useState([]);
  const[valorInput, setValorInput] = useState("")
  const[busqueda,setBusqueda] = useState("")
  
const handleClick = () =>{
  setBusqueda(valorInput)
  console.log("hola")
}

const handleChange = (e) =>{
  setValorInput(e.target.value)
  console.log(valorInput)
}

  
  useEffect(() => {
   
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.results);
      });
  }, [busqueda]);



return(

  <div >
        <Navbar 
        clickBoton ={handleClick}
        cambioInput ={handleChange}
      />
    
      <Box sx={{ bgcolor: '#ff9800', display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
        
            {productos.map(prod =>(
            <Tarjeta imagen={prod.thumbnail}
            nombre ={prod.name}
            precio={prod.price}
            key={prod.id} />

       ))}

{productos.length === 0 && <div><img src="./imagenes/not-a-market.png"/></div>}

        </Box>
 
         <Footer/>
     
      
    </div>

);
};
export default App;
