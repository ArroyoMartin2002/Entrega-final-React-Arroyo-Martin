/* Importacion */

//Modulos
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from "../../services/firebase";

//Estilos
import "./ItemList.css";

//Componentes
import Item from "../item/Item";


/* Logica */
const Itemlist = (props) => {

    const [productos, setProductos] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const getData = async() => {
            //1 creamos connsulta a la base de datos
            const queryRef = categoryId ? query(collection(db,"Lista Productos"), where("category","==",categoryId)) : collection(db,"Lista Productos");
            
            //2 hacer la consulta
            const response = await getDocs(queryRef);
            const docInfo = response.docs.map(doc => {
                const newDoc = {
                        id:doc.id,
                        ...doc.data()
                    }
                    return newDoc
                    
                });
            setProductos(docInfo.map(productos => <Item id={productos.id} key={productos.id} data={productos}/>))
            }
        getData();
            
        

    },[categoryId])

    return (
        <section>
            <h1 className="sectionName" >PRODUCTS</h1>
            <div className="contenedorProductos">
                {productos}
            </div>
        </section>
    );
};

/* Exportacion */

export default Itemlist


