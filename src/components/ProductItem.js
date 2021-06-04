
const ProductItem = (props) => {
    const {item, selectItem} = props;

    const addItem = (e) => {
        e.preventDefault();
        selectItem(item);
    }

    return (
        <div className={'product-item'}>
                <button onClick={addItem}>add</button>
                <p>{item[1].name}</p>
        </div>
    )
}

export default ProductItem;