import Header from "./components/Header.jsx";
import Inicio from "./components/Inicio.jsx";
import SobreMi from "./components/SobreMi.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Contacto from "./components/Contacto.jsx"
import './App.css';

function App() {
 
  return (
    <>
      <Header></Header>
      <Inicio></Inicio>
      <SobreMi></SobreMi>
      <Proyectos></Proyectos>
      <Contacto></Contacto>
    </>
  )
}

export default App;
