import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import DetailPage from './pages/DetailPage';

export const basketContext = createContext();
function App() {
  const [basket, setbasket] = useState([])
  return (
    <div className="App">
      <basketContext.Provider value={[basket,setbasket]}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/detail/:id' element={<DetailPage/>}/>
          </Routes>
        </BrowserRouter>
      </basketContext.Provider>
    </div>
  );
}

export default App;
