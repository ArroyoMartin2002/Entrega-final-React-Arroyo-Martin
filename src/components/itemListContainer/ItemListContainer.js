/* Importacion */

//Modulos
//Estilos
import "./ItemListContainer.css";

//Componentes
//Estilos

/* Logica */
const ItemlistContainer = (props) => {
  //Funcion constructora o arrow function
  //Retorno que va a renderizar
    return (
        <section>
            <p className="saludo">{props.greeting}</p>
        </section>
    );
};

/* Exportacion */

export default ItemlistContainer


