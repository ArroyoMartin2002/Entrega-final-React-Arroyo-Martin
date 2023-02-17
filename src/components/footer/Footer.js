/* Importacion */
import './Footer.css'
import logo from '../../assets/img/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

/* Logica */

const Footer = () => {
    return (
        <footer>
            <div className='contenedor d-flex align-items-center justify-content-evenly'>
                <Link to="/" ><img alt='logo' className='logo-footer' src={logo}></img></Link>
                <p className='text-white align-items-center align-self-end'>© 2023 MSC Store</p>
                <div className='redes'>
                    <a href='www.facebook.com'><FaFacebookF/></a>
                    <a href='www.instagram.com'><FaInstagram/></a>
                    <a href='www.youtube.com'><FaYoutube/></a>
                </div>
            </div>
        </footer>
    )
        
}

/* Exportacion */
export default Footer