import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Barra} from './componentes/Barra'
import './App.css';
import {RegistrarPersona} from './componentes/RegistrarPersona'
import { VerPersonas } from './componentes/VerPersonas';
import {RegistrarCiudad} from './componentes/RegistrarCiudad'
import {VerCiudad} from './componentes/VerCiudad'
function App() {
  return (
    <Router>
         <Barra/>
         <Route path='/registrarPersona' exact component={RegistrarPersona}/>
         <Route path='/verPersonas' exact component={VerPersonas}/>
         <Route path='/registrarCiudad' exact component={RegistrarCiudad}/>
         <Route path='/verCiudad' exact component={VerCiudad}/>
    </Router>
 
    
  );
}

export default App;
