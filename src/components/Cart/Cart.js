/* Importacion */

//Modulos


//Estilos
import "./Cart.css";

//Componentes
import {useCartContext} from "../Context/CartContext";
import CartItem from "../Cart Item/CartItem";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../services/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";

/* Logica */
const Cart = () => {

    const {items, clearCart, totalPrice, totalQuantity} = useCartContext()

    const cartList = items.map(productos => <CartItem id={productos.id} key={productos.id} data={productos} />)
    const [orderId, setOrderId] = useState(undefined);


    const [formData, setFormData] = useState({name: '', phone: '', zipcode: '', email: '', emailValidation: ''})
    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            })
        }

    const sendOrder = async (event) =>{
        if (formData.email === formData.emailValidation) {
            const newOrder = {
                buyer:{
                    name:formData.name,
                    phone:formData.phone,
                    email:formData.email,
                    zipcode:formData.zipcode
                    },
                products:items,
                total:totalPrice(),
            }
            const queryRef = collection(db,"orders");
            const response = await addDoc(queryRef,newOrder);
            console.log(response);
            setOrderId(response.id)
            clearCart()
        } else {
            
        }
    }

    const [finishPurchaseOn,finishPurchaseChange ] = useState(false)

    const preventDefault = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="cart-container">
                <h2 className="sectionName">MY CART</h2>
                {orderId !== undefined ? <p className="text-center">your order Id is: {orderId} </p> : <></>}
                {totalQuantity() !== 0 ? cartList :                     
                                                    <div className="cart-panel-empty">
                                                        <p className="cart-empty-text">Ow...Your shopping cart is empty</p>
                                                        <p className="cart-empty-text-2">Don't know what to buy? Thousands of products are waiting for you!</p>
                                                        <Link to="/products"><button className="cart-empty-button">take a look at our products!</button></Link>
                                                    </div> }
                <p className={(totalQuantity() !== 0 ? 'total' : 'inactive')}>Total: $ {totalPrice().toFixed(2)}</p>
                <div className={(totalQuantity() !== 0 ? 'cart-panel' : 'inactive')}>
                    <button className="cart-clear" onClick={clearCart}>Clear Cart</button>
                    <a href="#orderForm"><button className="cart-continue" onClick={() => finishPurchaseChange(true)}>Checkout</button></a>
                </div>
                <form id="orderForm" onSubmit={preventDefault}  className={(totalQuantity() !== 0 && finishPurchaseOn === true ? 'cart-form' : 'inactive')}>
                    <label className="cart-form-label">
                        Name: <input placeholder="Name" onChange={updateInput} value={formData.name} type={"text"} name="name" />
                    </label>
                    <label className="cart-form-label">
                        Phone: <input placeholder="Phone" onChange={updateInput} value={formData.phone} type={"tel"} name="phone" />
                    </label>
                    <label className="cart-form-label">
                        ZipCode: <input placeholder="Zipcode/Postcode" onChange={updateInput} value={formData.zipcode} autoComplete='postal-code' type={"text"} name="zipcode" />
                    </label>
                    <label className="cart-form-label">
                        Email Adress: <input placeholder="Email" onChange={updateInput} value={formData.email} type={"email"} name="email" />
                    </label>
                    <label className="cart-form-label">    
                        Confirm Email: <input placeholder="Confirm email" onChange={updateInput} value={formData.emailValidation} type={"email"} name="emailValidation" />
                    </label>
                    <button className="cart-form-input" onClick={sendOrder} type={"submit"}>PLACE ORDER</button>
                </form>
            </div>
        </>
    );
};

/* Exportacion */

export default Cart


