import CartItem from './CartItem';

const Cart = (props) => {
    const {selected, modifyAmount} = props;

    return (
        <div>
            {Object.entries(selected).map(item => {
                return <CartItem key={item[0]} item={item} modifyAmount={modifyAmount}/>
            })}
            <p>{Object.entries(selected).length}</p>
        </div>
    )
}

export default Cart;