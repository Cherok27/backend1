import React from 'react'
import { useState } from 'react'

const Items = ({array,index}) => {
const sumar =()=>{
  setPene(pene +1)
}
  const [pene, setPene] = useState(0);
  const[count,setCount]=useState(0)
 
 
console.log(pene)
  return (
    <div >
      <h1>Productos{pene}</h1>
        <div className="product-container">
          <div key={index} className="product">
            <img src={array.imagen} alt="Producto"/>
            <div className="product-info">
            <h2 className="product-name">{array.nombre}</h2>
            <p className="product-type">Tipo: {array.tipo}</p>
            <p className="product-brand">Marca: {array.marca}</p>
            <p className="product-quantity">Cantidad: {array.cantidad}</p>
            <p className="product-price">Precio: {array.precio}</p>
            <button  className='comprita' onClick={sumar} > 🛒</button>
            </div>
          </div>

        </div>
        
        </div>
  )
}

export default Items