/* Importacion */

//Modulos

//Estilos
import "./Item.css";

//Componentes
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
//Estilos

/* Logica */
const Item = (props) => {
    const{title,price,img,id} = props.data

    return (
            <Card className="card-container">
                <Card.Img variant="top" src={img}/>
                <Card.Body className="card">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="price">${price}</Card.Text>
                    <Link className="detailsLink" to={`/product/${id}`}>More Details</Link>
                </Card.Body>
            </Card>
        )
}

/* Exportacion */

export default Item


