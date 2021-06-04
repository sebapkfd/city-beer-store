import './App.css';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import Home from './components/Home';
import Cart from './components/Cart';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import call from './call';
import { useEffect, useState } from 'react';

const App = () => {
    const [items, setItems] = useState(null);
    const [selected, setSelected] = useState({});

    const getData = async () => {
        const response = await call();
        setItems(response);
    }

    const selectItem = (item) => {
        if (!(item[0] in selected)) {
            setSelected( state => ({...state, [item[0]] : item[1]}))
        }
    }

    useEffect(() => {
        getData();
    }, [])

    if (items) {
        return (
            <div className="App">
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/cart">
                            <Cart/>
                        </Route>
                        <Route exact path="/product/:id">
                            <ProductPage items={items}/>
                        </Route>
                        <Route exact path="/home">
                            <Home items={items} selectItem={selectItem}/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
    return null;
}

export default App;
