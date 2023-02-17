/* Importacion */

//Modulos

//Estilos
import "./CartWidget.css";
import { RiShoppingCartLine } from "react-icons/ri";
//Componentes
import {useCartContext} from "../Context/CartContext";

//Estilos

/* Logica */
const CartWidget = () => {
  //Funcion constructora o arrow function
    const {totalQuantity} = useCartContext()
    
  //Retorno que va a renderizar
    return (
        <div className={(totalQuantity() !== 0 ? 'cart' : 'inactive')}>
            <RiShoppingCartLine size={30} className="cartLogo w-40"></RiShoppingCartLine>    
            <span className="counterCart fs-6">{totalQuantity()}</span>
        </div>
    );
};

/* Exportacion */
export default CartWidget



