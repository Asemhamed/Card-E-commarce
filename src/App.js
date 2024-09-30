import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import { Routes ,Route} from 'react-router';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;
