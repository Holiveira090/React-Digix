import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PerfilUsuario from './Components/PerfilUsuario';

function App() {
  return (
    <div className='catalogo'>
      <PerfilUsuario
        imagem={"https://gru.ifsp.edu.br/images/phocagallery/galeria2/image03_grd.png"}
        nome='Pinguins'
        bio='3 pinguins atoa'/>

    </div>
  )
}

export default App;