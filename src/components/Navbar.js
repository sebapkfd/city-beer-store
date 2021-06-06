import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <Link to='/'>
                <h1>Tienda</h1>
            </Link>
            <Link to='/'>
                <img 
                    src={'https://cdn.shopify.com/s/files/1/0025/1464/9124/files/CBS_Logo_340x.png?v=1527617306'}
                    alt={'home-logo'}
                />
            </Link>
            <Link to='/cart'>
                <span class="material-icons">
                shopping_bag
                </span>
            </Link>
            
        </div>
    )
}

export default Navbar;