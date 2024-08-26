import { useContext } from "react";
import { AuthContext } from "../Application/Context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const location = useLocation()

    console.log(location)
    const {user} = useContext(AuthContext)

    if (user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;