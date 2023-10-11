import "../styles/proyectos.css";
import tecnocompra from "../src/tecnocompra.png";
import { FaArrowRight } from 'react-icons/fa';



function Proyectos() {
  
    return (
        <>
         
   
          <section className="proyectos_container">
            <h2  > Proyectos</h2>
            <div className="tarjeta_proyecto">
               <img src={tecnocompra} alt={`imagen de tecnocompra`} className="tecnocompra"/>
               <h3> TecnoCompra</h3>
               <span> Es un e-commerce sobre venta de tecnología. Lo desarrollé junto a dos compañeros 
                en la diplomatura FullStack de la UTN. Usamos React native, Git y Github.
               </span>
               <div className="boton">
                 <a href="">Conocer más </a> 
                 <FaArrowRight/>
               </div>
              
            </div>
          </section>
   
     </>
        
    ) 
}

export default Proyectos;
