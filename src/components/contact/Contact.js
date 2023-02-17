/* Importacion */

//Modulos

//Estilos
import "./Contact.css";

//Componentes


/* Logica */
const Contact = (props) => {

    return (
        <div className="min-vh-100">
            <h2 className="sectionName">CONTACT</h2>
            <form className={"cart-form w-75 contact"}>
                <label className="cart-form-label ">
                    Name: <input></input>
                </label>
                <label className="cart-form-label">
                    Subject: <input></input>
                </label>
                <label className="cart-form-label">
                    Email: <input></input>
                </label>
                <label className="cart-form-label">
                    Message: <input></input>
                </label>
                <input className="cart-form-input" type="submit" value="Submit"/>
            </form>
        </div>
    );
};

/* Exportacion */

export default Contact


