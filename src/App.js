import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Signup from './components/signup';
import Navbar from './components/navbar';
import SignIn from './components/signin';
import {useState,useEffect} from 'react';
import axios from 'axios';
// import AllOrders from './components/orders';

const AllOrders=()=>{
  const [orders,setOrders] = useState([])

  useEffect(()=>{
      axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(res=>{
          setOrders(res.data);
      })
  })
  
  return(
      <div>
          {
              orders.map(order=>(
                  <div className='flex-container'>
                      <div className='card'>
                          <img className='imgZ' src="https://picsum.photos/300"/>
                          <h1 className='row' key={order.id}>{order.name}</h1>
                          <button className='buttonZ'> Add this order</button>
                      </div>
                  </div>
              ))
          }
      </div>
  
  )
}

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
