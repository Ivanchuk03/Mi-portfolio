import "../styles/contacto.css";
import github from "../src/github.png";
import gmail from "../src/gmail.png";
import linkedin from "../src/linkedin.png";
import { GrDownload } from 'react-icons/Gr';

function Contacto() {
   function name(params) {
      
   }


    return (
        <div id="contact" className="contacto_container">
           <h2>Contacto</h2>
           <p>
             Si querés un desarrollador capacitado tanto en las habilidades técnicas como en las blandas, y 
             que está dispuesto a seguir aprendiendo para mejorar cada día, te invito a que me contactes.
           </p>
           <div className="social_media" >
               <div className="github">
                  <a href="https://github.com/Ivanchuk03" target="_blank"> 
                     <img src={github} alt="Imagen de Github"/> 
                  </a> 
               </div>
               <div className="gmail">
                  <a href="mailto:florinezivan@gmail.com" target="_blank"> 
                     <img src={gmail} alt="Imagen de Gmail" /> 
                   </a> 
               </div>
               <div className="linkedin">
                   <a href="https://www.linkedin.com/in/ivan-florinez/" target="_blank"> 
                     <img src={linkedin} alt="Imagen de Linkedin"/>   
                  </a> 
               </div>  
               <div className="descargar_cv">
                  <a href="https://drive.google.com/file/d/15vLgb3hphIxYBOVdJT0sZphM9Y0sXuZY/view" target="_blank">
                     Descargar CV
                  </a>
                  <GrDownload></GrDownload>
               </div>
           </div>
        </div>
    )
  
}

export default Contacto;
