import { useContext } from 'react';
import  carrito from '../assets/carrito.svg'
import { CarritoContext } from '../../context.js/CarritoProvider';

const CartWiget = () => {

    const {contClicks}=useContext(CarritoContext)
    
    return (
        <div  style={{ display: 'flex' }} >
            <img src={carrito} alt='carrito' width="112" height="28px" />
            <b style={{ color: 'black' }}> <p>{contClicks}</p></b>

        </div>
    )
}

export default CartWiget;