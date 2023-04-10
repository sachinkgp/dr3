import React,{useState} from 'react'
import '../App.css'

const SignIn=()=>{
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const PostData = ()=>{
        console.log("Looged in")
    }
    return(
    <div className='flex-container'>
        <div className='card'>
            <input type="text" placeholder="Email ID" 
            value={email} className="rows"
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="password" placeholder="Password" 
            value={password} className="rows"
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button 
            className="rows buttonZ"
            onClick={PostData}
            >SignIn</button>
        </div>
    </div>
    )
}

export default SignIn;