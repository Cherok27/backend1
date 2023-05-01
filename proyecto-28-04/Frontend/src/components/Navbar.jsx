import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logotipo.png";
import { useNavigate } from 'react-router-dom';
const Navbar = ({searchp}) => {


let tokensito = localStorage.getItem("datosUsuario");
tokensito ? tokensito =true: ( tokensito=false)
const pasar=useNavigate();
 
  const logeao=()=>{
		pasar('/Search');
	}
const eventoSubmit=(e)=>{
   logeao()
};

const [lupa ,setLupa]= useState("")
const eventoNombre =(event)=>{
  setLupa(event.target.value)
};
searchp(lupa);
return (
  <div className='divnav'><nav>
  <ul  className='izquierda'>
    <NavLink to="/Inicio"><img src={logo} width="150px"alt="" /></NavLink>        
  
    <NavLink
            className={({ isActive }) => (isActive ? "activo" : null) }
            to="/Formulario"
          > ✆✉
      </NavLink>
  </ul >
  <ul className='izquierda'> <form id="searchNavbar"  >
      
      <input type="text" name="" id="" placeholder='Buscar producto' onChange={eventoNombre}value={lupa} /><input type="button" value="🔍" onClick={eventoSubmit}/></form> 
       
     
  
  <NavLink
            className={({ isActive }) => (isActive ? "activo" : null)}
            to="/Carrito"
          >🛒<sup ></sup>
          
          </NavLink>
          {console.log(tokensito)}
         {  tokensito?  <NavLink
        className= "activo"
            to="/Logout"
                
          >
           LogOut
          </NavLink>
          :<NavLink
            className="activo" 
            to="/Registro"
          >
           Login
          </NavLink> }
       
       
    
  </ul>
  
  </nav>
        
  </div>
  )
}

export default Navbar