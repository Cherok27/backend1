import axios from 'axios';
import inicioImg from "../assets/cannabis-background.jpg"
import React, { useEffect, useState } from 'react'
import Items from '../components/Items';
 
 



const Inicio = ({setArrayI}) => {
  const [arrayGet,setArrayGet]=useState(null);
   const allesget =async (data)=>{
  console.log("entro");
  await axios.get("http://localhost:5000/api/Items").then((reponse)=>{
   setArrayGet(reponse.data.productos) 
    console.log(reponse.data.productos)
  } )
  .catch((error)=> {
    console.log(error.data)
  });
 
}
    useEffect(()=>{

 allesget();

    },[]);
    setArrayI(arrayGet)
    console.log(arrayGet)
  return (
    
    <div >
      <div className='nomas'>
      <img src={inicioImg} className='oscurecer' alt="" />
     <h1 className='h1'>La DrogaEcoMarkt</h1></div>
        {arrayGet? <div className='result'>{arrayGet.map((pri,index)=>(
          <Items key={pri._id} index={index}  array={pri} />
        ))}</div>: (<div className="container">
  <div className="cargando">
    <div className="pelotas"></div>
    <div className="pelotas"></div>
    <div className="pelotas"></div>
    <span className="texto-cargando">Cargando...</span>
  </div>
</div>)}
     
     
      
    </div>
  )
}

export default Inicio