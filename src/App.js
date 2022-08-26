import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import alienLogo from './img/alien.png';
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClic = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className='logo-alien'
          src={alienLogo}
          alt="logo de alien" />
      </div>
      <div className='container1'>
        <Contador numClicks={numClicks} />
        <Boton
          texto='Click'
          esBotonDeclic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto='Reiniciar'
          esBotonDeclic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
