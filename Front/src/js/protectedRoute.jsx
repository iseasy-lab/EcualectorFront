import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(sessionStorage.getItem("usuario"));

    }, []);

    return isAuth !== "" ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;