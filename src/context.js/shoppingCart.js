import React, { createContext, useState} from "react";


 export const CartContext = createContext(null)

 export const ShoppingCartProvider= ({children})=>{


    const [producto, setProducto] = useState(null);


    return(<CartContext.Provider value={[producto,setProducto]}>
        {children}
        </CartContext.Provider>)
}


