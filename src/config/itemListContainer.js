import { Link } from "react-router-dom";
import { ProductContex } from "../context.js/ProductProvider";
import { useContext } from "react";


function Productos() {
    const producto = useContext(ProductContex);
   
   console.log("aqui toy",producto);
    return (
       
         <div className="contenedor">
             {producto.map((item) => (
                <div key={item.id} className="tarjeta">
                    <h1 className="title">{item.nombre} </h1>
                    <figure className="img-div">
                        <img src={item.imagen} alt={item.nombre} className="imagen" />
                    </figure>
                    <Link to={`/productos/${item.id}`} className="button is-normal is-info is-outlined">
                        Detalles
                    </Link>
                </div>
            ))}

        
        </div>
    
    )

}
export default Productos;