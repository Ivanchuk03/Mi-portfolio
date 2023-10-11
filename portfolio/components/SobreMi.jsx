import "../styles/SobreMi.css";
import html from "../src/html.png";
import css from "../src/css.png";
import bootstrap from "../src/bootstrap.png";
import js from "../src/js.png";
import R from "../src/R.png";
import C from "../src/C++.png";
import git from "../src/git.png";





function SobreMi() {
    return (
       <> 
        <section id="aboutMe" className="sobremi_container">
            <h2>Acerca de mí</h2>
            <div>
             <h3 className="sobremi_h3">Estudios y experiencia</h3>
              <p>
               Actualmente estoy cursando una diplomatura en desarrollo web Full Stack en la 
               Universidad Tecnológica Nacional, la cuál obtuve a través  de una beca de la 
               Fundación Empujar. Tengo experiencias en proyectos de desarrollo web que estoy 
               desarrollando particularmente y junto a  compañeros de la diplomatura. <br/>
               Además del conocimiento técnico, conozco las metodologías ágiles y desarrollé las
               habilidades blandas necesarias para insertarme en el mundo IT. 
              </p>
            </div>
          
            <h3>Tecnologías</h3>
            <div className="tecnologias">
             <div> <img src={html} alt={`imagen de html`} />  <span>HTML</span>  </div>
             <div> <img src={css} alt={`imagen de css`} />  <span>CSS</span>  </div>
             <div> <img src={bootstrap} alt={`imagen de bootstrap`} />  <span>Bootstrap</span>  </div>
             <div> <img src={js} alt={`imagen de JavaScript`}/>  <span>JavaScript</span>  </div>
             <div> <img src={R} alt={`imagen de React`} />  <span>React</span>  </div>
             <div> <img src={git} alt={`imagen de git`} />  <span>Git</span>  </div>
             <div> <img src={C} alt={`imagen de C++`} />  <span>C++</span>  </div>
            </div>
 
            <div id="projects"></div>
        </section>
         
        </>     
    ) 
}

export default SobreMi;
