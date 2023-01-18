/* Importacion */

//Modulos
import { useEffect, useState } from "react";

//Estilos
import "./ItemDetail.css";

//Componentes
import ItemCount from "../ItemCount/ItemCount";



/* Logica */
const ItemDetail = (props) => {

    const [cantidadDeProductosAComprar, setcantidadDeProductosAComprar] = useState(0)

    const funcionDeHijoDeGuardarCantidad = (cantidad) => {
        setcantidadDeProductosAComprar(cantidad);
    }

    const onAdd = () => {
        console.log(`item detail contador = ${cantidadDeProductosAComprar}, total de = ${cantidadDeProductosAComprar * price}`);
    } 

    const{title,price,image,description} = props.data
    return (
        <>
            <figure >
                <img className="img-detail" alt="product" src={image}></img>
            </figure>
            <figcaption className="text-detail">
                <h3>{title}</h3>
                <p>$ {price}</p>
                <p>{description}</p>
                <ItemCount stock={10} guardarCantidadAComprar={funcionDeHijoDeGuardarCantidad}/>
                <button className='addToCart' onClick={onAdd}>Add To cart</button>
            </figcaption>
        </>
        )
}
/* Exportacion */

export default ItemDetail


