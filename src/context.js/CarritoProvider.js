import { useState, createContext } from "react";

export const CarritoContext = createContext(null);

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [contClicks, setContClicks] = useState(0);

  const agregarCarrito = async (id) => {
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
        return [...currItem, { ...isItemFound, quantity: 1 }];
      }
    });
    setContClicks((contClicks) => contClicks + 1);
  };

  const removerItem = (id) => {
    setCarrito((currItems) => {
      const itemToRemove = currItems.find((item) => item.id === id);

      if (!itemToRemove) {
        return currItems;
      }

      if (itemToRemove.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });

    setContClicks((prevContClicks) => prevContClicks - 1);
  };

  const cantidad = (precio,quantity) => {
    
    const suma = quantity * precio;
    console.log(suma);
    const sumar = suma.toFixed(2)
    return sumar;
  };

  const totalCarrito = carrito.reduce((total, producto) => {
    const { quantity, precio } = producto;
    const totalAPagar = total + quantity * precio;
    const  redondeado = totalAPagar;
    return redondeado;
  }, 0);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        setCarrito,
        agregarCarrito,
        contClicks,
        setContClicks,
        removerItem,
        cantidad,
        totalCarrito
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
