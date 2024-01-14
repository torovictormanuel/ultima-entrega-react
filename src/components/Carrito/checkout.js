import { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
// import Contador from "./contador";

function Checkout({carrito,sumar,restar}){

    
    const { id } = useParams();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const filtro = carrito.filter((item) => item.id === id);
        if (filtro.length > 0) {
            setCart(filtro);
        }
    }, [carrito, id]);
   
    return(
        <div>
            
        <div>
         <h1>Productos </h1>
         <div>
          {carrito}
            <button onClick={restar} className="manejadores">-</button>
            <p>Agregar</p>
            <button onClick={sumar} className="manejadores">+</button>
                </div>
         


         <Link to='/productos' className="button is-info is-outlined">Volver</Link>
        </div>
        <div className="divider"></div>
        <div><button className="button is-info is-outlined">comprar</button></div>
        </div>
    )
    
}

export default Checkout;

