import PrimerComponente from './Componentes/PrimerComponente';
import Contact from './Screens/Contact';
import Marcas from './Screens/Marcas';
import Ojos from './Screens/Ojos';
import Rostro from './Screens/Rostro';
import SkinCare from './Screens/SkinCare';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <PrimerComponente />

       <Marcas />
       <SkinCare />
       <Rostro />
       <Ojos />
       
       <Contact />

      </header>  
    </div>
  );
};

export default App;
