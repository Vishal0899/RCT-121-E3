
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/appContext";

function PrivateRoute({ children }) {
    const [state] = useContext(AppContext);

    if (!state.isAuth) {
        return <Navigate to="/" />;
    }

    return children;
}

export default PrivateRoute;


