import CartItem from './CartItem';

const Cart = (props) => {
    const {selected, modifyAmount} = props;
    const totalPrice = Object.entries(selected).reduce((acc, cv) => acc + cv[1].price * cv[1].amount, 0);

    return (
        <div>
            {Object.entries(selected).map(item => {
                return <CartItem key={item[0]} item={item} modifyAmount={modifyAmount}/>
            })}
            <p>{totalPrice}</p>
        </div>
    )
}

export default Cart;