/* Importacion */

//Modulos
//Estilos
import "./CartWidget.css";
import { RiShoppingCartLine } from "react-icons/ri";
//Componentes
//Estilos

/* Logica */
const CartWidget = (props) => {
  //Funcion constructora o arrow function

  //Retorno que va a renderizar
    return (
        <div className="cart">
            <RiShoppingCartLine size={30} className="cartLogo w-40"></RiShoppingCartLine>    
            <span className="counterCart fs-6">{props.quantity}</span>
        </div>
    );
};

/* Exportacion */
export default CartWidget



