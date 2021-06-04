import ProductItem from './ProductItem';
import {Link} from 'react-router-dom';

const Home = (props) => {
    const {items} = props;

    return (
        <div className={'home'}>
            {Object.entries(items).map(item => {
                return (
                    <Link to={`/product/${item[0]}`} key={item[0]}>
                        <ProductItem item={item}/>
                    </Link>
                    )
            })}
        </div>
    )
}

export default Home;