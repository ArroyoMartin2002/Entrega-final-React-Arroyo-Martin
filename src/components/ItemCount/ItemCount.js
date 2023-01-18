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
            setCount(count + 1)
            props.guardarCantidadAComprar(count)
        }
        
    }
    /* restar */
    const minusOne = () => {
        if(count > 0){
            setCount(count - 1)
            props.guardarCantidadAComprar(count)
        }
        
    }

    return (
        <div className='counter'>
            <div className='ui'>
                <button onClick={minusOne}>-</button>
                <p>{count}</p>
                <button onClick={addOne}>+</button>
            </div>
            
        </div>
    );
};

/* Exportacion */

export default ItemCount


