import CartItem from './CartItem';

const StoreCart = (props) => {
    const {selected, modifyAmount, removeItem, store} = props;
    const storeItems = Object.entries(selected).filter(item => item[1].store === store);
    const storePrice = storeItems.reduce((acc, cv) => acc + cv[1].price * cv[1].amount, 0);

    return (
        <div className={'store-cart'}>
            <p className={'store-name'}>{store}</p>
            {storeItems.map(item => {
                return <CartItem key={item[0]} item={item} modifyAmount={modifyAmount} removeItem={removeItem}/>
            })}
            <div className={'store-total'}>
                <p>Total en esta tienda </p>
                <div className={'store-total__price'}>
                    <p>${storePrice}</p>
                </div>
            </div>
        </div>
    )
}

export default StoreCart;