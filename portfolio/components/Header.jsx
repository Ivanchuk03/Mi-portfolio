import "../styles/header.css";
import logo from "../src/logo.png"
import Navbar from "./Navbar";

function Header() {
   function Reloadpage() {
     window.scrollTo(0, 0);
     window.location.reload();

   }
   
    
    return (
      <> 
      <div className="header_container">
        < img src={logo} alt={`logo de Ivan`}
          className="logo" onClick={Reloadpage}/>
        <Navbar></Navbar>
      </div>  

      </>   
    )
}

export default Header;
