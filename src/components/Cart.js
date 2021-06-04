import CartItem from './CartItem';

const Cart = (props) => {
    const {selected} = props;

    return (
        <div>
            {Object.entries(selected).map(item => {
                return <CartItem key={item[0]} item={item}/>
            })}
            <p>{Object.entries(selected).length}</p>
        </div>
    )
}

export default Cart;