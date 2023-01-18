/* Importacion */

//Modulos


//Estilos
import "./Home.css";

//Componentes
import logo from '../../assets/img/logo.png'

/* Logica */
const Home = (props) => {

    return (
        <sectionc className="homePage" >
            < div class = "hero" >
                <img alt="hero banner" src={logo}></img>
                <div class = "text" >
                    <p>- Unlocking the rhythm of your soul -</p> 
                </div> 
            </div>
        </sectionc>
    );
};

/* Exportacion */

export default Home


