import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Progress from "../Components/Progress";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return  <Progress></Progress>
    }

    if (user) {
        return children
    }

    return <Navigate to={"/login"}  state={{form:location}} replace ></Navigate>


};

export default PrivateRoute;