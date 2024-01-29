
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/styles/product.css'
import 'bulma/css/bulma.min.css'
import './components/styles/home.css'
import './components/styles/searchBar.css'
import './components/styles/carrito.css'
import './config/sweetAlert'
import Home from './pages/home';
import Layout from './pages/Layout';
import Productos from './config/itemListContainer';
import DetalleProducto from './components/datosProductos/detalleProducto';
import Carrito from './components/Carrito/carrito';
import { ProductoProvider } from './context.js/ProductProvider';
import { CarritoProvider } from './context.js/CarritoProvider';

function App() {
  
  
  return (
    <CarritoProvider>
    <ProductoProvider>
      <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='productos' element={<Productos  />} />
            <Route path='productos/:id' element={<DetalleProducto />} />
            <Route path='carrito' element={<Carrito  />} />
            <Route path='*' element={<Home />} />
          </Route>
        </Routes>
    </div>
      </BrowserRouter>
    </ProductoProvider>
    </CarritoProvider>
  );

  }

export default App;

