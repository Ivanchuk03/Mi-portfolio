import "../styles/inicio.css";
import Foto from "../src/Foto_mia.jpg";

function Inicio() {
    return (
        <section id="home" className="inicio_container">
            <div  className="grid_container">
             <h1 className="titulo">Iván Ariel Florinez  </h1>
             <h2 className="subtitulo">Front-end Developer</h2>
           
             <p   className="presentacion"> 
              ¡Hola! Soy Iván Florinéz. Soy un joven de 23 años con una gran 
              capacidad de comunicación y oratoria, soy perseverante y mantengo el
              optimismo frente a las dificultades de un proyecto.
              Mi objetivo es poder desarrollar mi carrera profesional en un equipo que esté 
              en constante crecimiento. 
             </p>
             <img src={Foto} alt={`Foto de Iván`} className="foto" />
            </div>
       
            
        </section>
    )
}

export default Inicio;
