/* Importacion */

//Modulos

//Estilos
import "./CartItem.css";

//Componentes
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

/* Logica */
const CartItem = (props) => {

    const {removeItem} = useCartContext()
    
    const{title,price,img,id,count} = props.data

    const totalProductPrice = price * count

    return (
        <Card className="cart-card-container">
                <Card.Body className="cart-card">
                    <Card.Img className="cart-img" src={img}/>
                    <Card.Title className="cart-item-name">{title}</Card.Title>
                    <Card.Text className="">$ {totalProductPrice.toFixed(2)} </Card.Text>
                    <Link className="detailsLink" to={`/product/${id}`}>See Product</Link>
                    <span className="count-item">{count} u.</span>
                    <button className="delete-button" onClick={() => removeItem(id)}><img alt="delete icon" src="https://cdn-icons-png.flaticon.com/512/542/542724.png"></img></button>
                </Card.Body>
        </Card>
        
    );
};

/* Exportacion */

export default CartItem


