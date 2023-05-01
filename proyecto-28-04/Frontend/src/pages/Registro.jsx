import array from "../components/BDD"; 
import logo from "../assets/logotipo.png";
import React, { useState } from "react";
import axios from"axios"
import { useNavigate } from 'react-router-dom';
const Registro = () => {

  const pasar=useNavigate();
 
  const logeao=()=>{
		pasar('/Inicio');
	}
  
  const signin=()=>{ pasar('/signin')};
 
  const [newEmail ,setNewEmail]= useState("");
  const [newPassword ,setNewPassword]= useState("");
 const [error, setError] = useState(false);
 const [fallo, setFallo] = useState(false);

const eventoSubmit=(e)=>{
  e.preventDefault(); 
    setError(false);
    if (
      newEmail.length ===0 ||
      newPassword.length ===0

    ) {
      setError(true);
      return;
    } ;
    gestorFormulario()
    
  
   
};

const arrayRegistro={
      email:newEmail,
      password:newPassword
    }
    

const   gestorFormulario= async(data)=>{
  console.log("AXIOS")
  await axios.post( 
    "http://localhost:5000/api/usuarios/login",
      arrayRegistro
     )
   .then((response) => {
      
        console.log("Todo correcto",response);
       localStorage.setItem("datosUsuario",
        JSON.stringify({
          userId: response.data.userId,
          token:response.data.token,
        }));
        window.location.reload();
        logeao();
      })
      .catch((error) => {
        setFallo(true)
        
        console.log(error.data); 
      });
}  


let par=null
const eventoEmail =(event)=>{
  setNewEmail(event.target.value)
};
const eventoPassword =(event)=>{
  setNewPassword(event.target.value)
};
  return (
  <div>

   
    <div onSubmit={eventoSubmit}>
        
                
      <form   >
                  <div >Sign In
                  </div>{error ?(<h3>Por Favor rellene los dos campos</h3>) : null}
                  {fallo ? <h3>no existe el usuario</h3>:null}
                  
        <div >
          <label  htmlFor="">Email</label><br />
          <input type="email" placeholder="Enter email" onChange={eventoEmail}value={newEmail} />
        
        </div>
        <div >
          <label htmlFor="">Password </label><br />
          <input type="password"  placeholder="Password" onChange={eventoPassword} value={newPassword}/>
          <div >
            <button   id="sign-in" type="submit" >Inicio Sesion</button>
            
            <p >Keep me signed in. <a >Details</a></p>
            <img className="img_1" src={logo} alt=""/>
          </div>
        </div>
          {par=array.some((pri) => {
            
            return  pri.password===arrayRegistro.password && pri.email===arrayRegistro.email })
          } 
          {par ? <h3>ya esta dentro</h3>: null}
        
          
        <button type="button"  id="grey-button" onClick={signin} >Crea tu cuenta</button>
        
      </form> 
          
        
    </div>
 </div>
  )
}

export default Registro