import React, { useState } from 'react'
import logo from "../assets/logotipo.png";
import axios from"axios"
import { Await, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
const signin = () => {
   const pasar=useNavigate();
   const [usuarioAxios, setUsuariosAxios]=useState(false)
 console.log(usuarioAxios)
 let user
  const usuarioid=(pri)=>{pri=usuarioAxios }
  const usuarioids=(pri)=>{pri=user }
 
  const logeao=()=>{pasar('/Inicio')}
  const [error, setError] = useState(false);
   const [fallo, setFallo] = useState(false);
const responseMessage = (response) => {
        console.log(response);
    };
const errorMessage = (error) => {
        console.log(error);
    };
const [newNombre, setNewNombre]=useState("");
const [newEmail, setNewEmail]=useState("");
const [newPassword, setNewPassword]=useState("");
const extraerDatosDeUsuario = () => {
    const datosRecuperar = JSON.parse(localStorage.getItem("datosUsuario"));
    if (datosRecuperar && datosRecuperar.token) {
      // Si existe algo que recuperar y dentro de lo recuperado existe la propiedad token
      console.log(datosRecuperar.token);
      return [datosRecuperar.token, datosRecuperar.userId];
    }
  };
const eventoSubmit=(e)=>{
  e.preventDefault(); 
    setError(false);
    if (
      newEmail.length ===0 ||
      newPassword.length ===0||
      newNombre.length===0
    ) {
      setError(true);
      return;
    } ;
   gestorFormulario();
    
  
};
const arraySigning={
  email:newEmail,
  password:newPassword,
  nombreCompleto:newNombre
  
};
const   gestorFormulario= async(data)=>{
  console.log("AXIOS")
  await axios.post( 
    "http://localhost:5000/api/usuarios/",
      arraySigning
     )
   .then((response) => {
        usuarioids(respose.data.userId);
        console.log("Todo correcto",response)
      })
      .catch((error) => {
        setFallo(true)
        
        console.log(error.data); 
      });
    
} 


const eventoEmail =(event)=>{
  setNewEmail(event.target.value)
};
const eventoPassword =(event)=>{
  setNewPassword(event.target.value)
};
const eventoNombre =(event)=>{
  setNewNombre(event.target.value)
};

  return (
    <div className='divform'><div className='form' onSubmit={eventoSubmit}>
           
            {error ? (
          <h3 className="error-campos">Debe completar todos los campos</h3>
        ) : null}
         {fallo ? <h3>ya existe el usuario</h3>:null}
            <form action="">
            <label htmlFor="">Nombre:</label><input type="text" name="nombre" id="" placeholder='Nombre y apellido' onChange={eventoNombre} value={newNombre}
            /> 
            <label htmlFor="">Número de móvil o dirección de correo electrónico:</label><input type="text" name="" id="" onChange={eventoEmail} value={newEmail}  />
            <label htmlFor="">Constraseña:</label> <input type="password" name="password" id="" 
            placeholder='Al menos 6 caracteres' onChange={eventoPassword} value={newPassword}
            />
            <label htmlFor="">Confirmar password:</label><input type="text" name="Muerte" id="" 
            /> 
            <button type='submit'>Enviar</button><GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </form>
        </div>
         </div>
        
  )
}

export default signin