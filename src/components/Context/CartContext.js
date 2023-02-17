/* Importacion */

//Modulos
import { useContext, createContext, useState } from "react";

//1 Crear contexto (valor default) => ()
//2 exportarlo

export const CartContext = createContext([])

//3 crear funcion para poder usart el contexto 
//4 (hook personalizado)
//5 exportarla
export const useCartContext = () => {return useContext(CartContext) }

//6 crear el componenete del contexto proveedor

/* Logica */
const CartProvider = ({children}) => {

    //estado del cartprovider
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('cart')) ?? [])

    const saveLocal = (dataName) => {
        localStorage.setItem("cart", JSON.stringify(dataName));
    }
    
    //funciones de el cartprovider

    const addItem = (data, qty) => {

        const nuevaLista = [...items];

        if (validateExistentItem(data.id)) {

            const productoIndex = items.findIndex(e=>e.id === data.id);
            nuevaLista[productoIndex].count = nuevaLista[productoIndex].count + qty;
            setItems(nuevaLista)
            saveLocal(nuevaLista);

        }else{
            const newProduct = data
            nuevaLista.push(newProduct)
            setItems(nuevaLista)
            saveLocal(nuevaLista)
        }
    } 

    const removeItem = (id) => {
        const nuevaLista = items.filter(e => e.id !== id )
        setItems(nuevaLista)
        saveLocal(nuevaLista)
    }

    const clearCart = () => {
        setItems([])
        saveLocal([])
    };

    const validateExistentItem = (id) => {

        if(items.find(e=> e.id === id)){ 
            return true
        } else {
            return false
        }
    }

    const totalQuantity = () => {
        const totalQuantity = items.reduce((acc,item)=> acc + item.count, 0);
        return totalQuantity;
    }

    const totalPrice = () => {
        let total = 0
        items.forEach((e) => total += (e.count * e.price))
        return total        
    }

    //render del cartprovider
    return (
        <CartContext.Provider value={{items, addItem, clearCart, removeItem, setItems,totalPrice, totalQuantity}}>
            {children}
        </CartContext.Provider>
    );
};

/* Exportacion */

export default CartProvider


