import PropTypes from 'prop-types';
import Bottle from "../Bottle/Bottle";
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {

    return (
        <div>
            <h4>Selected Items: {cart.length}</h4>
            <div className="cart-container">
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <Bottle bottle={bottle}></Bottle>
                        <input onClick={() => handleRemoveFromCart(bottle.id)} type="button" value="Remove" />
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;