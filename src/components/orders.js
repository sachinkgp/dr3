import React,{useState,useEffect} from 'react'
import '../App.css'
import axios from 'axios'

const AllOrders=()=>{
    const [orders,setOrders] = useState([])

    useEffect(()=>{
        axios
        .get('http://jsonplaceholder.typicode.com/users')
        .then((res)=>{
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

export default AllOrders;