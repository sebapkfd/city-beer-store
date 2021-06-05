import StoreCart from './StoreCart';

const CartPage = (props) => {
    const {selected, modifyAmount, removeItem} = props;
    const totalPrice = Object.entries(selected).reduce((acc, cv) => acc + cv[1].price * cv[1].amount, 0);
    const stores = [...new Set(Object.entries(selected).map(item =>  item[1].store))];

    return (
        <div>
            {stores.map(store => {
                return <StoreCart key={store} selected={selected} modifyAmount={modifyAmount} removeItem={removeItem} store={store}/>
            })}
            <p>Total a Pagar</p>
            <p>${totalPrice}</p>
            <button>Pagar</button>
        </div>
    )
}

export default CartPage;