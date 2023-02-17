/* Importacion */

//Modulos

//Estilos
import "./Home.css";

//Componentes
import logo from '../../assets/img/logo.png'

/* Logica */
const Home = (props) => {
    return (
        <section className="homePage" >
            < div className="hero">
                <img alt="hero banner" src={logo}></img>
                <div className="text" >
                    <p>- Unlocking the rhythm of your soul -</p> 
                </div> 
            </div>
        </section>
    );
};

/* Exportacion */

export default Home


