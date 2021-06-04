
const ProductItem = (props) => {
    const {item} = props;

    return (
        <div className={'product-item'}>
                <p>{item[1].name}</p>
        </div>
    )
}

export default ProductItem;