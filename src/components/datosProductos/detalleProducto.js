import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ProductContex } from "../../context.js/ProductProvider";
import { CarritoContext } from "../../context.js/CarritoProvider";
import Swal from "sweetalert2";

function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const productoDetalle = useContext(ProductContex);
  const { setCarrito, setContClicks, contClicks } = useContext(CarritoContext);

  useEffect(() => {
    const obtenerDetalles = () => {
      const detalle = productoDetalle.find((item) => item.id === id);
      console.log("detalle", detalle);
      if (detalle) {
        setProducto(detalle);
      }
    };

    obtenerDetalles();
  }, [id]);

  const agregarCarrito = () => {
    const { nombre } = producto;
    setCarrito((currItem) => {
      const isItemFound = currItem.find((item) => item.id === id);

      if (isItemFound) {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItem, { ...producto, quantity: 1 }];
      }
    });
    setContClicks(contClicks + 1);
    Swal.fire({
      title: `Se agrego ${nombre} al carrito con exito!`,
      icon: "success",
    });
  };

  return (
    <div>
      <Link to={"/productos"} className="button is-info is-outlined volver">
        Volver
      </Link>
      <div className="container">
        {producto && (
          <div className="">
            <h1 className="title">{producto.nombre}</h1>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="imagen"
            />
            <p className="content title">Descripcion: {producto.descripcion}</p>
            <p className="title">Precio: {producto.precio}$</p>
            <div className="button  is-light is-flex">
              <Link to="/productos">
                <button
                  onClick={agregarCarrito}
                  className="button is-medium is-info is-outlined"
                >
                  Agregar al carrito
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetalleProducto;
