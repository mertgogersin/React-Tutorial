
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Customers from './day-3/customers';
import Home from './day-3/Pages/Home';
import Products from './day-3/products';

function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
        <li>
            <Link to = "/home">Home</Link>
          </li>
          <li>
            <Link to = "/products">Product List</Link>
          </li>
          <li>
            <Link to = "/customers">Customer List</Link>
          </li>
        </ul>


        <Switch>
          
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/customers">
            <Customers></Customers>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>

      </BrowserRouter>
      
    </>
  );
}

export default App;
