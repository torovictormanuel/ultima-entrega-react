import { Link, useParams } from "react-router-dom";
import { useEffect ,useState} from "react";


function DetalleProducto({estado,agregarAlCarrito}){

    const {id}= useParams()
    const [producto,setProducto]= useState([])


    const detalle = estado.find((item)=>item.id === id)

    useEffect(()=>{
     
        const obtenerDetalles =  ()=>{
            if (detalle){

                setProducto(
                    < div className="container">
                    <div key={detalle.id} className="tarjeta">
                      <h1 className="title">{detalle.nombre}</h1>
                      <img src={detalle.imagen} alt={detalle.nombre} className="imagen"/>
                      <p className="content">{detalle.descripcion}</p>
                      <p className="title">Precio: {detalle.precio}$</p>
                    <div className="button  is-light is-flex" >

                      <button onClick={()=> agregarAlCarrito(producto)} className="button is-medium is-info is-outlined " >Agregar al carrito</button>
                    </div>

                      </div> 
                  </div>
                )
            
            }
        }
        obtenerDetalles()
    },[id]);
return (
  <div>
  <Link to={'/productos'} className="button is-info is-outlined">Volver</Link>
    <div className="container">
    {producto && (
          <div className="">
            {producto}
             </div>)}
    </div>
     </div>
    )
}


export default DetalleProducto;