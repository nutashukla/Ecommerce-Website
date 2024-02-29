import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Register from './services/Register';
import Login from './services/Login';
import Home from './services/Home';
import Private from './services/Private';
import Navbar from './services/Navbar';
import Category1 from './services/Private/Category1';
import Category2 from './services/Private/Category2';
import Cart from './services/Private/Cart';
import Prview from './services/Private/Prview';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container mt-3">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/private" element={<Private />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/category1" element={<Category1 />} />
            <Route path="/category2" element={<Category2 />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/prview" element={<Prview />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
