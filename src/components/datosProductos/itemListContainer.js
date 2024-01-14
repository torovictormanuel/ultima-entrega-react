import { Link } from "react-router-dom";



function Productos({estado}) {

    return (
       
         <div className="contenedor">

       
            {estado.map((item) => (
                <div key={item.id}  className="tarjeta">
                    <h1 className="title">{item.nombre} </h1>
                    <figure className="img-div"  >
                    <img src={item.imagen} alt={item.nombre}  className="imagen"/>
                    </figure>

                    <Link to={`/productos/${item.id}`} className="button is-normal is-info is-outlined ">Detalles</Link>

                </div>
            ))
        }

        
        </div>
    
    )

}
export default Productos;