/* Importacion */
import './Footer.css'
import logo from '../../assets/img/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

/* Logica */

const Footer = () => {
    return (
        <footer>
            <div className='contenedor d-flex align-items-center justify-content-evenly'>
                <a href='./index.html'><img className='logo-footer' src={logo}></img></a>
                <p className='text-white align-items-center align-self-end'>© 2022 MSC Store</p>
                <div className='redes'>
                    <a href='#'><FaFacebookF/></a>
                    <a href='#'><FaInstagram/></a>
                    <a href='#'><FaYoutube/></a>
                </div>
            </div>
        </footer>
    )
        
}

/* Exportacion */
export default Footer