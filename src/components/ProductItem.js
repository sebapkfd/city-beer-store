import assets from './assets';


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
            <img src={assets[item[0]]}
                alt={assets[item[0]]}/>
            {/* {assets[item[0]]} */}
            <p className={'product-item__name'}>{item[1].name}</p>
            <p>{item[1]['units-in-pack']} {unit}</p>
            <p className={'product-item__price'}>${item[1].price}</p>
            {fastShipping}
        </div>
    )
}

export default ProductItem;