
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

    return (
        <div className={'product-item'}>
            <button onClick={(e) => addItem(e)}>{addButton}</button>
            {/* <img src={item[1].image}
                alt={item[1].name}/> */}
            <p>{item[1].name}</p>
            <p>{item[1]['units-in-pack']} {unit}</p>
            <p>${item[1].price}</p>
        </div>
    )
}

export default ProductItem;