import './App.css';

import { CargaInicial } from './components/CargaInicial';
import { MenuPrincipal } from './components/MenuPrincipal'

import { useState } from 'react';
import { VerDatosCuentaBancaria } from './components/VerDatosCuentaBancaria'

function App() {

  const [cuentas, setCuentas] = useState('');

 



  return (
    <div className="App">
      {cuentas === '' && <CargaInicial setCuentas={setCuentas} />} 


      {cuentas !== '' && <MenuPrincipal cuentas={cuentas} />}
      {/* { (datoscuenta !== '' && verDatosCuenta == true) && <VerDatosCuentaBancaria {...datoscuenta}  />} */}

 
    </div>
  );
}

export default App;
