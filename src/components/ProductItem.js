import {Link} from 'react-router-dom';

const ProductItem = (props) => {
    const {item} = props;

    return (
        <div>
            <Link to={`/product/${item[0]}`}>
                <p>{item[1].name}</p>
            </Link>
        </div>
    )
}

export default ProductItem;