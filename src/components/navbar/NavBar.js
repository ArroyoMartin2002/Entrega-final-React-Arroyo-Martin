/* Importacion */

//Modulos
//Estilos
import './NavBar.css'
import logo from '../../assets/img/logo.png'
import CartWidget from '../cartWidget/CartWidget'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//Componentes
//Estilos


/* Logica */
const NavBar = (props) => { //Funcion constructora o arrow function
    //Retorno que va a renderizar
    return (
        <header>
            <Navbar className='p-0 m-0' collapseOnSelect expand="lg" variant="dark">
                <Container className='gap-5'>
                    <Navbar.Brand href="./index.html">
                        <img className='logo' alt='logo' src={logo}></img>
                    </Navbar.Brand>
                    <CartWidget></CartWidget>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#">NOSOTROS</Nav.Link>
                        <NavDropdown title="PRODUCTOS" id="collasible-nav-dropdown">
                            <NavDropdown.Item className='drop' href="#">GUITARRAS</NavDropdown.Item>
                            <NavDropdown.Item className='drop' href="#">BAJOS</NavDropdown.Item>
                            <NavDropdown.Item className='drop' href="#">PEDALES</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">CONTACTO</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}


/* Exportacion */

export default NavBar

