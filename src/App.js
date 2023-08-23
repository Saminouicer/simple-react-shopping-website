import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Cart from './pages/cart/cart'
import Shop from './pages/shop/shop'
import Contextshop from'./context/contextshop'

function App() {
  return (
 
      <>
        <Contextshop>
        <Router>   
            <Navbar/>
          <Routes>
            <Route path='/' element={<Shop />} /> 
            <Route path='/cart' element={<Cart />} /> 
          </Routes>
        </Router>
        </Contextshop>
      </>
      
    );
}

export default App;
