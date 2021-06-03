import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <Link to='/home'>
                <h1>Tienda</h1>
            </Link>
            <Link to='/cart'>
                <h1>Carro</h1>
            </Link>
        </div>
    )
}

export default Navbar;