import  carrito from '../assets/carrito.svg'


const CartWiget = ({contClicks}) => {
    
    return (
        <div  style={{ display: 'flex' }} >
            <img src={carrito} alt='carrito' width="112" height="28px" />
            <b style={{ color: 'black' }}> <p>{contClicks}</p></b>

        </div>
    )
}

export default CartWiget;