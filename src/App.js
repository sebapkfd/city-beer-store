import './App.css';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import Home from './components/Home';
import Cart from './components/Cart';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import call from './call';

function App() {
  // call()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/product/:id">
            <ProductPage/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
