import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Logout from './components/Logout';
import Navbar from "./components/Navbar";
import Signin from './pages/Signin';
import Carrito from "./pages/Carrito"
import NotFound from './pages/NotFound';
import Noticias from './pages/Noticias';
import Formulario from './pages/Formulario';
import Registro from "./pages/Registro"
import Inicio from './pages/Inicio';
import Search from "./components/Search"
function App() {

 
 let [estado, setEstado] = useState(null);
   let variableCambiada = (pri) => {
		setEstado( estado=pri);
	};
  const pasarS=((pri)=>{setSearch(pri)})
  const pasarI=((pri)=>{setArrayI(pri)})
 const [search, setSearch] = useState(null);
const [arrayI,setArrayI]=useState(null)
 console.log(arrayI)

  return (
    <div className="App">  <Router>
        <Navbar variblem={variableCambiada}   searchp={pasarS}/>
        <Routes>
          <Route path="/Inicio"  element={<Inicio setArrayI={pasarI}  />}/>
          <Route  path="/Registro" element={<Registro />} />
          <Route  path="/Logout" element={<Logout />} />
          <Route  path="/Search" element={<Search search={search} arrayGet={arrayI}/>} />
          <Route path="/Formulario" element={<Formulario />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Noticias" element={<Noticias />} />
         <Route path="/Signin" element={<Signin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      
     
    
    </div>
  )
}

export default App
