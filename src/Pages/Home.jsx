import axios from "axios";
import { useContext, useState } from "react"
import { Navigate } from "react-router";
import { AppContext } from "../Context/appContext";



export const Home = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, dispatch] = useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            url: "https://reqres.in/api/login",
            method: "POST",
            data: {
                email,
                password
            }
        }).then((res) => {
            // console.log(res)
            alert("success")
            dispatch({
                type: "LOGIN_SUCCESS",
                token: res.data.token
            });

        })
            .catch((err) => {
                console.log(err.message);
                alert("error")
            })
    }


    if(state.isAuth){
        return <Navigate to={"/posts"}/>
    }
    return (
        <div style={{marginTop:"1rem"}}>
            <form onSubmit={handleSubmit}>

                <input value={email} type="text" placeholder="username" onChange={(e) => setEmail(e.target.value)} />
                <input value={password} type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}