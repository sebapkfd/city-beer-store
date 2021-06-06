
const ProductItem = (props) => {
    const {item, selectItem} = props;

    const addItem = (e) => {
        e.preventDefault();
        selectItem(item);
    }

    const unit = (item[1]['units-in-pack'] === 6) ? 'pack' : 'Unidad';

    const addButton = <span className="material-icons">
    shopping_bag
    </span>

    const fastShipping = (item[1]['fast-shipping']) ? <div className={'fast-shipping'}>Envio rápido</div> : null;

    return (
        <div className={'product-item'}>
            <div>
                <button onClick={(e) => addItem(e)}>{addButton}</button>
            </div>
            {/* <img src={item[1].image}
                alt={item[1].name}/> */}
            <p>{item[1].name}</p>
            <p>{item[1]['units-in-pack']} {unit}</p>
            <p>${item[1].price}</p>
            {fastShipping}
        </div>
    )
}

export default ProductItem;