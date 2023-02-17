/* Importacion */

//Modulos
import { useState } from "react";

//Estilos
import "./ItemDetail.css";

//Componentes
import ItemCount from "../ItemCount/ItemCount";
import {useCartContext} from "../Context/CartContext";


/* Logica */
const ItemDetail = (props) => {

const {addItem} = useCartContext()

    const [cantidadDeProductosAComprar, setcantidadDeProductosAComprar] = useState(0)

    const funcionDeHijoDeGuardarCantidad = (cantidad) => {setcantidadDeProductosAComprar(cantidad)}

    const{title,price,img,description,id,category,stock} = props.data

    const onAdd = () => {
        if (cantidadDeProductosAComprar > 0) {
            const product = {
                id:id,
                title:title,
                img:img,
                category:category,
                price:price,
                count:cantidadDeProductosAComprar,
            };
    
            addItem(product, cantidadDeProductosAComprar)
        }
    }
    
    return (
        <>
            <figure >
                <img className="img-detail" alt="product" src={img}></img>
            </figure>
            <figcaption className="text-detail">
                <h3>{title}</h3>
                <p>$ {price}</p>
                <p>{description}</p>

                <div className="d-flex flex-column mt-3">
                    <ItemCount stock={stock} guardarCantidadAComprar={funcionDeHijoDeGuardarCantidad}/>
                    <button className='addToCart' onClick={onAdd}>Add To cart</button>
                </div>
            </figcaption>
        </>
        )
}
/* Exportacion */

export default ItemDetail


