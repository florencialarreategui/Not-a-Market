import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Home from "./components/Home";
import TarjetaDetalle from "./components/TarjetaDetalle"
import { BrowserRouter, Routes, Route } from "react-router-dom";



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

  
    <BrowserRouter>
        <Navbar  
          clickBoton ={handleClick}
          cambioInput ={handleChange}
        />
        
         <MainSection></MainSection>
      
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productos" element={<MainSection/>}/>
          <Route path="/productos/:idProducto" element={<TarjetaDetalle/>}/>
          </Routes>     
               
       <Footer/>
       </BrowserRouter>  
   

 
);
};
export default App;
