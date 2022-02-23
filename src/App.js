import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Mainsection from "./components/Mainsection"
import Tarjeta from "./components/Tarjeta";
import Box from '@mui/material/Box';





const App = () =>{
  
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

return(

  <div >
    

        <Navbar  
          clickBoton ={handleClick}
          cambioInput ={handleChange}
        />
        
         <Mainsection></Mainsection>
                
       <Footer/>
        
   
</div>
 
);
};
export default App;
