/* Importacion */

//Modulos
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Estilos
import "./ItemDetailContainer.css";

//Componentes
import ItemDetail from "../itemDetail/ItemDetail";

/* Logica */
const ItemDetailContainer = (props) => {

    const [productos, setProductos] = useState([])

    const {productId} = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(productos => setProductos(<ItemDetail key={productos.id} id={productos.id} data={productos} />))
    }, [productId])

    return (
        <section className="container-detail">
            {productos}
        </section>
    );
};

/* Exportacion */

export default ItemDetailContainer


