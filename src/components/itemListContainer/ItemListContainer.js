/* Importacion */

//Modulos
import { useParams } from "react-router-dom";
import { useEffect } from "react";

//Estilos
import "./ItemListContainer.css";

//Componentes
import Itemlist from "../itemlist/ItemList";


//Estilos

/* Logica */
const ItemlistContainer = (props) => {

    return (
            <section>
                <Itemlist/>
            </section>
    );
};

/* Exportacion */

export default ItemlistContainer


