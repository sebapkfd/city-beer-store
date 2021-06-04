import { useState } from "react";

const CartItem = (props) => {
    const {item, modifyAmount, removeItem} = props;
    const [render, setRender] = useState(true);

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

    const deleteItem = (e) => {
        e.preventDefault();
        removeItem(item);
        setRender(false);
    }

    if (render) {
        return (
            <div className={'cart-item'}>
                <p>{item[1].name}</p>
                <div>
                    <button onClick={(e) => changeAmount(e, '-')}>-</button>
                    <p>{item[1].amount}</p>
                    <button onClick={(e) => changeAmount(e, '+')}>+</button>
                    <button onClick={(e) => deleteItem(e)}>Delete</button>
                </div>
                <p>${item[1].price*item[1].amount}</p>
            </div>
        )
    }
    return null;
    
}

export default CartItem;