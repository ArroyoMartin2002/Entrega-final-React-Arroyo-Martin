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
import { Link } from 'react-router-dom';
//Componentes
//Estilos


/* Logica */
const NavBar = (props) => { //Funcion constructora o arrow function
    //Retorno que va a renderizar
    return (
        <header>
            <Navbar className='p-0 m-0' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='logo' alt='logo' src={logo}></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto gap-3">
                        <Nav.Link as={Link} to="/aboutus"> ABOUT US</Nav.Link>
                        <NavDropdown title="PRODUCTS" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/products" className='drop' href="#">CATALOGUE</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="products/category/electronics" className='drop' href="#">- Electronics</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="products/category/jewelery" className='drop' href="#">- Jewelery</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="products/category/men's clothing" className='drop' href="#">- Men's Clothing</NavDropdown.Item>
                        </NavDropdown>
                        
                        <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
                        <CartWidget quantity={20} />
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}


/* Exportacion */

export default NavBar

