import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [data, setData] = useState({})
  
    // useEffect(() => {
    //     axios({
    //         method : "POST",
    //         url : " https://reqres.in/api/login",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //     })
    //     .then(res => res.join())
    //     .then((data) => {
    //         setIsAuth(true);
    //         setToken(data.token);
    //     });
    // },[])
  
    return (
    <div>
        <br/>
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Email'/>
        <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter Password'/>
        <button onClick={() => setData({"email": email, "password": password})}>Login</button>
    </div>
  )
}
