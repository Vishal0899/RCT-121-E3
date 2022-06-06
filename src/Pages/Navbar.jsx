
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            {/* <a/> */}
            <Link style={{ marginRight: "1rem" }} to="/">Home</Link>
           
            <Link to="/posts">Users</Link>
        </div>
    );
}

export default Navbar;