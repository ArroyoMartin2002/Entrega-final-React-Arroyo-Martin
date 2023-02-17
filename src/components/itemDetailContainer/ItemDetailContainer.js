/* Importacion */

//Modulos
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from "../../services/firebase";

//Estilos
import "./ItemDetailContainer.css";

//Componentes
import ItemDetail from "../itemDetail/ItemDetail";

/* Logica */
const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])
    const {productId} = useParams()

    useEffect(() => {
        const getData = async() => {
            //1 creamos connsulta a la base de datos
            const queryRef = query(collection(db,"Lista Productos"), where("id", "==", parseInt(productId)))
            
            //2 hacer la consulta
            const response = await getDocs(queryRef);
            const docInfo = response.docs.map(doc => {
                const newDoc = {
                        id:doc.id,
                        ...doc.data()
                    }
                    return newDoc
                });
                setProductos(docInfo.map(productos => <ItemDetail id={productos.id} key={productos.id} data={productos}/>))
            }
        getData();
    }, [productId])

    return (
        <section className="container-detail">
            {productos}
        </section>
    );
};

/* Exportacion */

export default ItemDetailContainer


