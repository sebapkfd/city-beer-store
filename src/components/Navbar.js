import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <Link to='/home'>
                <h1>Tienda</h1>
            </Link>
            <Link to='/home'>
                <img 
                    src={'https://cdn.shopify.com/s/files/1/0025/1464/9124/files/CBS_Logo_340x.png?v=1527617306'}
                    alt={'home-logo'}
                />
            </Link>
            <Link to='/cart'>
                <h1>Carro</h1>
            </Link>
        </div>
    )
}

export default Navbar;