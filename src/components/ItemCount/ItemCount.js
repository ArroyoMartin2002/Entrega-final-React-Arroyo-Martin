/* Importacion */

//Modulos
import {useState} from 'react'  

//Estilos
import "./ItemCount.css";

//Componentes

//Estilos

/* Logica */
const ItemCount = (props) => {

    const [count,setCount] = useState(0);

    /* sumar */
    const addOne = () => {
        if(count < props.stock){
            setCount(count + 1)}
        props.guardarCantidadAComprar(count + 1)
    }
    /* restar */
    const minusOne = () => {
        if(count !== 0 ){
            setCount(count - 1)}
        props.guardarCantidadAComprar(count - 1)
    }



    return (
        <div className='counter'>
            <div className='ui'>
                <button disabled = {props.stock === 0} onClick={minusOne}>-</button>
                <p>{count}</p>
                <button disabled = {props.stock === 0} onClick={addOne}>+</button>
            </div>
        </div>
    );
};

/* Exportacion */

export default ItemCount


