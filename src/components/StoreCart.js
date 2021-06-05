import CartItem from './CartItem';

const StoreCart = (props) => {
    const {selected, modifyAmount, removeItem, store} = props;
    const storeItems = Object.entries(selected).filter(item => item[1].store === store);

    return (
        <div>
            <p>{store}</p>
            {storeItems.map(item => {
                return <CartItem key={item[0]} item={item} modifyAmount={modifyAmount} removeItem={removeItem}/>
            })}
        </div>
    )
}

export default StoreCart;