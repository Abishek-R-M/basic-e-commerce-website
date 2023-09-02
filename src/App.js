import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import ShopContextProvider from './context/shopContext';
import Login from './pages/checkout/login';
import Payment from './pages/checkout/payment';
import Thankyou from './pages/checkout/thankyou';


function App() {
  return (
    <div className="App">
    <ShopContextProvider>
     <Router>
       <NavBar /> 
       <Routes>
         <Route path='/' element={<Shop />} />
         <Route path='/cart' element={<Cart />} />
         <Route path='/checkout' element={<Login />} />
         <Route path='/payment' element={<Payment />} />
         <Route path='/thankyou' element={<Thankyou />} />
       </Routes>
     </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;
