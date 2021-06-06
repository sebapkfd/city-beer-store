import { useState } from "react";

const CartItem = (props) => {
    const {item, modifyAmount, removeItem} = props;
    const [render, setRender] = useState(true);

    const changeAmount = (e, value) => {
        e.preventDefault();
        if (value === '+') {
            item[1].amount += 1;
            modifyAmount(item);
        }
        else if (item[1].amount > 0 && value === '-') {
            item[1].amount -= 1;
            modifyAmount(item);
        }
    }

    const deleteItem = (e) => {
        e.preventDefault();
        removeItem(item);
        setRender(false);
    }

    const plusButton = <span class="material-icons">
    control_point
    </span>

    const minusButton = <span class="material-icons">
    remove_circle_outline
    </span>

    const deleteButton = <span class="material-icons">
    delete
    </span>
    

    if (render) {
        return (
            <div className={'cart-item'}>
                <div className={'cart-item__name'}>
                    <p>{item[1].name}</p>
                </div>
                <div className={'cart-item__options'}>
                    <button onClick={(e) => changeAmount(e, '-')}>{minusButton}</button>
                    <p>{item[1].amount}</p>
                    <button onClick={(e) => changeAmount(e, '+')}>{plusButton}</button>
                    <button onClick={(e) => deleteItem(e)}>{deleteButton}</button>
                </div>
                <div className={'cart-item__total'}>
                    <p>${item[1].price*item[1].amount}</p>
                </div>
            </div>
        )
    }
    return null;
    
}

export default CartItem;