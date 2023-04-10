// import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Signup from './components/signup';
import Navbar from './components/navbar';
import SignIn from './components/signin';
import AllOrders from './components/orders';

function App() {
  return (
  <BrowserRouter>
  <Navbar />
    <Routes>
        <Route path="/allorders" element={<AllOrders />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>      
  );
}

export default App;
