/* Importacion */

//Modulos
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Estilos
import "./ItemList.css";

//Componentes
import Item from "../item/Item";


/* Logica */
const Itemlist = (props) => {

    const [productos, setProductos] = useState([])

    const {categoryId} = useParams()
    
    console.log(categoryId);

    useEffect(() => {
            
        if (categoryId != null) {
            fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
            .then(res=>res.json())
            .then(json=> setProductos(json.map(productos => <Item key={productos.id} id={productos.id} data={productos}/>)))
        } else {
            fetch(`https://fakestoreapi.com/products`)
            .then(res=>res.json())
            .then(json=> setProductos(json.map(productos => <Item key={productos.id} id={productos.id} data={productos}/>)))
        }
    
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


