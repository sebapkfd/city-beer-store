
const CartItem = (props) => {
    const {item, modifyAmount} = props;

    const changeAmount = (e, value) => {
        e.preventDefault();
        if (value === '+') {
            item[1].amount +=1;
            modifyAmount(item);
        }
        else if (item[1].amount > 0 && value === '-') {
            item[1].amount -=1;
            modifyAmount(item);
        }
    }

    return (
        <div className={'cart-item'}>
            <p>{item[1].name}</p>
            <div>
                <button onClick={(e) =>changeAmount(e, '-')}>-</button>
                <p>{item[1].amount}</p>
                <button onClick={(e) =>changeAmount(e, '+')}>+</button>
            </div>
            <p>${item[1].price*item[1].amount}</p>
        </div>
    )
}

export default CartItem;