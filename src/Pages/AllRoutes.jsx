import { Routes, Route } from "react-router-dom"
import PrivateRoute from "../Components/PostItem"
import { Home } from "./Home"
import Navbar from "./Navbar"
import { Posts } from "./Posts"




export const AllRoutes = () => {

    return (
        <div>
            <Navbar />

            <div>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/posts" element={
                        <PrivateRoute>
                            <Posts />
                        </PrivateRoute>
                    }
                    ></Route>
                </Routes>
            </div>
        </div>
    )
}