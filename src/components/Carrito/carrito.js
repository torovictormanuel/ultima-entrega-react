import { useEffect, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context.js/CarritoProvider";
import { ProductContex } from "../../context.js/ProductProvider";
import Swal from "sweetalert2";
import Carita from '../assets/caritaTriste.png'

function Carrito() {
  const { id } = useContext(ProductContex);
  const { carrito, setCarrito, agregarCarrito, removerItem,cantidad,totalCarrito } = useContext(CarritoContext);

  const carritoMap = useMemo(() => {
    return new Map(carrito.map((item) => [item.id, item]));
  }, [carrito]);

  useEffect(() => {
    const item = carritoMap.get(id);
    if (item) {
      setCarrito(item);
    }
  }, [carritoMap, id]);

  const handleAddToCart = (itemId) => {
    agregarCarrito(itemId);
    console.log("pasando item", itemId);
  };

  const handleResta = (itemId) => {
    removerItem(itemId);
  };

  const comprar = ()=>{
    console.log("llego la compra");
    Swal.fire({
      title: `Su pedido se realizo con exito!`,
      icon: "success",
    });
  }
  const sinProductos =  "No hay productos en el carrito"

  return (
    <div>
  <Link to={"/productos"} className="button is-info is-outlined volver">
    Volver
  </Link>

  <div className="carrito-container">
    {carrito.length === 0 ? (
      <div className="sinProductos">{sinProductos}</div>
    ) : (
      <div>
        <h2 className="productos" >Productos</h2>
        {carrito.map((item) => (
          <div className="carrito-List" key={item.id}>
            <ul>
              <li className="carrito-item">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="carrito-image"
                />
                <div className="carrito-details">
                  <h3 className="carrito-title">{item.nombre}</h3>
                  <p className="carrito-description">{item.descripcion}</p>
                  <p className="carrito-price">${item.precio}</p>

                  <button
                    type="button"
                    className="carrito-remove-button"
                    onClick={() => {
                      handleResta(item.id);
                    }}
                  >
                    Quitar del Carrito
                  </button>
                  <div className="cantidad">x{item.quantity}</div>
                  <button
                    type="button"
                    className="carrito-add-button"
                    onClick={() => handleAddToCart(item.id)}
                  >
                    Agregar al Carrito
                  </button>
                </div>
                <div>
                  <p className="cantidad">${cantidad(item.precio, item.quantity)}</p>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    )}
    <div>
  {carrito.length > 0 ? (
    <div className="">
      <p className="total">Total a Pagar: ${totalCarrito}</p>
  <div className="comprar">
    <button className="button is-info is-outlined pedido" onClick={()=>comprar()}>Hacer pedido</button>
  </div>
      
    </div>
  ) : (
    <div>
      <img src={Carita} alt="" className="carita"/>
      </div>
  )}
</div>
  </div>
  </div>
  );
}
export default Carrito;
