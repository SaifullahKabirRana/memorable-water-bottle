import './Bottle.css';
const Bottle = ({bottle}) => {
    const {name, img, price, seller} = bottle;
    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <p>Seller: {seller}</p>
        </div>
    );
};

export default Bottle;