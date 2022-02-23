import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Tarjeta from "./components/Tarjeta";
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";




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
     <BrowserRouter> 

    <Navbar  
       clickBoton ={handleClick}
      cambioInput ={handleChange}
    />
         <Routes>
         <Route path="/" element={<Home />}/>
                
                  <Box sx={{ bgcolor: '#ff9800', display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
                    
                    {productos.map(prod =>(
                    <Tarjeta imagen={prod.thumbnail}
                    nombre ={prod.name}
                    precio={prod.price}
                    key={prod.id} />

                        ))}

                      {productos.length === 0 && <Home></Home>}

                  </Box>
         </Routes>
  
       <Footer/>
        
    </BrowserRouter>
</div>
 
);
};
export default App;
