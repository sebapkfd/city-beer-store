import { useState } from "react";

const CartItem = (props) => {
    const {item} = props;
    const [amount, setAmount] = useState(0);

    const changeAmount = (e, value) => {
        e.preventDefault();
        if (value === '+') {
            setAmount(amount => amount + 1);
        }
        else if (amount > 0 && value === '-') {
            setAmount(amount => amount - 1);
        }
    }

    return (
        <div>
            <p>{item[1].name}</p>
            <button onClick={(e) =>changeAmount(e, '+')}>+</button>
            <p>{amount}</p>
            <button onClick={(e) =>changeAmount(e, '-')}>-</button>
            <p>${item[1].price*amount}</p>
        </div>
    )
}

export default CartItem;