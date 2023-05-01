import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    	const navegar = useNavigate();
		const reload =()=>{
			window.location.reload();
		}
		
	useEffect(() => {
		localStorage.removeItem("datosUsuario");
		console.log("pasaporelefec")
		navegar('/Inicio');
		reload();
	}, []);
  return (
    <div></div>
  )
}

export default Logout