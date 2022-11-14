import './App.css';
import { Products } from './Components/Products';
import { Cart } from './Components/Cart';
import { Home } from './Components/Home';
import { Header } from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import { NewProduct } from './Components/NewProduct';
import {Apple} from "./example/Apple"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Apple />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-new-product" element={<NewProduct/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
