/* Importacion */

//Modulos

//Estilos
import "./Item.css";

//Componentes
import ItemCount from "../ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
//Estilos

/* Logica */
const Item = (props) => {
    const{title,price,image,id} = props.data

    return (
            <Card className="card-container">
                <Card.Img variant="top" src={image}/>
                <Card.Body className="card">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="price">${price}</Card.Text>
                    <Link className="detailsLink" to={`/product/${id}`}>More Details</Link>
                    <ItemCount stock={5}/>
                </Card.Body>
            </Card>
        )
}

/* Exportacion */

export default Item


