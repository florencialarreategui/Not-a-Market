import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DetalleProducto = () => {
  const params = useParams() 
  const [productoId, setProductoId] = useState([])

  console.log(params.idPersonaje)

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${params.id}`)
    .then(res => res.json())
    .then(data => setProductoId(data))
  }, [] )

  console.log(personaje)
  return (
    <div>
    <h1>Detalle producto</h1>
    
    </div>
  )
}

export default DetalleProducto