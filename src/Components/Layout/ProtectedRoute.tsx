import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredRole?: string; // Optional prop
}

function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
    const { user } = useContext(UserContext);

    // ✅ Redirect to login if user is not authenticated
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // ✅ Role check (only if requiredRole is provided)
    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to="/unauthorized" replace />;
    }

    return (
        <>
            <Navbar />
            <div className="mainContent">
                {children}
            </div>
        </>
    );
}

export default ProtectedRoute;