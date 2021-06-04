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
            item[1].amount = 1;
            setSelected( state => ({...state, [item[0]] : item[1]}));
        }
    }

    const modifyAmount = (newItem) => {
        if (newItem[0] in selected) {
            setSelected( state => ({...state, [newItem[0]] : newItem[1]}));
        }
    }

    const removeItem = (item) => {
        if (item[0] in selected) {
            let newSelected = selected;
            delete newSelected[item[0]]
            setSelected(newSelected);
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
                            <Cart selected={selected} modifyAmount={modifyAmount} removeItem={removeItem}/>
                        </Route>
                        <Route exact path="/product/:id">
                            <ProductPage items={items} selectItem={selectItem}/>
                        </Route>
                        <Route path="/">
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
