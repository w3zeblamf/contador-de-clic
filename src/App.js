import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    //App Container
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo' 

        src={freeCodeCampLogo}
        
        alt='Logo de freeCodeCamp'/>

      </div>
      <div className='contenedor-principal'>
        <Boton />
        <Boton />

      </div>
      
    </div>
    //End of App Container
  );
}

export default App;
