
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import './components/styles/product.css'
import 'bulma/css/bulma.min.css'
import './components/styles/home.css'
import './components/styles/searchBar.css'
import Layout from './pages/Layout';
import Productos from './components/datosProductos/itemListContainer';
import DetalleProducto from './components/datosProductos/detalleProducto';
import { useEffect, useState } from "react";
import { db } from './config/firebase';
import { collection, getDocs } from "firebase/firestore";
import Checkout from './components/Carrito/checkout';



function App() {

  //const [img, setImg] = useState([])
  const [itemList, setItemList] = useState([])
  const [contClicks, setContClicks] = useState(0);
  const [carrito,setCarrito]= useState([]);

  
  const itemsCollectionRef = collection(db, "productos");
  
  const getItemList = async () => {
    const data = await getDocs(itemsCollectionRef)
    const filtroData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }))
    setItemList(filtroData)
  }
  
  useEffect(() => {
    getItemList()
    ;
  }, [])

  
  const handleBusqueda = (valor) => {
    const respuesta =  Productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(valor.toLowerCase()) || producto.tipo.toLowerCase().includes(valor.toLowerCase())
    );
    setItemList(respuesta)
  }
  

   const agregarAlCarrito = (item)=>{
    setCarrito([carrito,item])
    setContClicks((prevClicks)=> prevClicks + 1)
    
  }

  
    const eliminarProducto = (idProducto) => {
      const nuevoCarrito = itemList.filter(producto => producto.id === idProducto);
      if(nuevoCarrito && contClicks > 0){
          setContClicks(contClicks - 1)
        setCarrito(nuevoCarrito);
      }
   }
 
   

  console.log("carrito de app",carrito)
 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout onSearch={handleBusqueda}  contClicks={contClicks} />}>
            <Route index element={<Home />} />
            <Route path='productos' element={<Productos estado={itemList} />} />
            <Route path='productos/:id' element={<DetalleProducto  estado={itemList}  agregarAlCarrito={agregarAlCarrito}/>} />
            <Route path='carrito' element={<Checkout carrito={carrito}   restar={eliminarProducto} suma={agregarAlCarrito} />} />
            <Route path='*' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

  }

export default App;

