/* Importacion */

//Modulos
//Estilos
import "./CartWidget.css";
import { RiShoppingCartLine } from "react-icons/ri";
//Componentes
//Estilos

/* Logica */
const CartWidget = () => {
  //Funcion constructora o arrow function

  //Retorno que va a renderizar
    return (
        <div>
            <RiShoppingCartLine className="cart w-40"></RiShoppingCartLine>    
            <span className="counter fs-6">0</span>
        </div>
    );
};

/* Exportacion */
export default CartWidget



