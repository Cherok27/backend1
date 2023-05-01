import React from 'react'

const Carrito = () => {
  return (
    <div><div className="basket">
    <h2>Tu cesta</h2>
    <ul className="basket-items">
    <li className="item">
    <img src="producto1.jpg" alt="Producto 1"/>
    <div className="item-details">
    <h3>Producto 1</h3>
    <p>Precio: $20</p>
    <p>Cantidad: 1</p>  
    </div>
    <button className="remove-item">Eliminar</button>
    </li>
    <li className="item">
    <img src="producto2.jpg" alt="Producto 2"/>
    <div className="item-details">
    <h3>Producto 2</h3>
    <p>Precio: $30</p>
    <p>Cantidad: 2</p>
    </div>
    <button className="remove-item">Eliminar</button>
    </li>
    </ul>
    <div className="basket-total">
    <p>Total: $80</p>
    <button className="checkout">Comprar</button>
    </div>
    </div></div>
  )
}

export default Carrito