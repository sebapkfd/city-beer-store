import ProductItem from './ProductItem';

const Home = (props) => {
    const {items} = props;

    return (
        <div>
            {Object.entries(items).map(item => {
                return <ProductItem key={item[0]} item={item}/>
            })}
        </div>
    )
}

export default Home;