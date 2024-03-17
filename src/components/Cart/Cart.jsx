import Bottle from "../Bottle/Bottle";
import './Cart.css';

const Cart = ({cart}) => {
   
    return (
        <div>
            <h4>Selected Items: {cart.length}</h4>
            <div className="cart-container">
            {
                cart.map(bottle => <Bottle  bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Cart;