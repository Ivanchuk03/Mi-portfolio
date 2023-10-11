import "../styles/navbar.css";

function Navbar() {
  function Scroll(clave) {
    let home_btn = document.getElementById("hogar");
    let sobreMi_btn = document.getElementById("sobreMi");
    let proyectos_btn = document.getElementById("proyectos");
    let contacto_btn = document.getElementById("contacto");
   


    sobreMi_btn.classList.remove("addBackgroundColorToLi");
    proyectos_btn.classList.remove("addBackgroundColorToLi");
    contacto_btn.classList.remove("addBackgroundColorToLi");
    home_btn.classList.remove("addBackgroundColorToLi");

    
       
     if(clave === "hogar"){
       home_btn.classList.add("addBackgroundColorToLi");
     }  
     if(clave === "sobreMi"){
      sobreMi_btn.classList.add("addBackgroundColorToLi");
     }
     if(clave === "proyectos"){
      proyectos_btn.classList.add("addBackgroundColorToLi");
     } 
     if(clave === "contacto"){
      contacto_btn.classList.add("addBackgroundColorToLi");
     }    
   
    

   
  }


  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    console.log(scrollPosition);

   if(scrollPosition>0 && scrollPosition <= 533.33 ) {
       Scroll("hogar");
   } 
   if(scrollPosition>533.33 &&  scrollPosition < 1546){
       Scroll("sobreMi");
   }
   if(scrollPosition>=1546 &&  scrollPosition < 1939){
    Scroll("proyectos");
   } 
    if(scrollPosition>=1939){
      Scroll("contacto");
  }
  })
   



  
  

  

  function addBackgroundColor(e) {
    let home_btn = document.getElementById("hogar");
    let sobreMi_btn = document.getElementById("sobreMi");
    let proyectos_btn = document.getElementById("proyectos");
    let contacto_btn = document.getElementById("contacto");
   


    sobreMi_btn.classList.remove("addBackgroundColorToLi");
    proyectos_btn.classList.remove("addBackgroundColorToLi");
    contacto_btn.classList.remove("addBackgroundColorToLi");
    home_btn.classList.remove("addBackgroundColorToLi");

    
       
     if(e.target.id === "hogar"){
       home_btn.classList.add("addBackgroundColorToLi");
     }    

     if(e.target.id === "sobreMi"){
      sobreMi_btn.classList.add("addBackgroundColorToLi");

    } 
    if(e.target.id === "proyectos"){
      proyectos_btn.classList.add("addBackgroundColorToLi");
    } 
    if(e.target.id === "contacto"){
      contacto_btn.classList.add("addBackgroundColorToLi");
    }  

   
  }
 
  

  return (
    <div className="navbar_container">
     <ul>
       <li><a href="#home" onClick={addBackgroundColor} id="hogar" >Inicio</a></li>
       <li  ><a href="#aboutMe" onClick={addBackgroundColor} id="sobreMi">Sobre mí</a></li>
       <li  ><a href="#projects" onClick={addBackgroundColor} id="proyectos">Proyectos</a></li>
       <li  ><a href="#contact" onClick={addBackgroundColor} id="contacto">Contacto</a></li>
     </ul>
    </div>
  )

  
}



export default Navbar;



