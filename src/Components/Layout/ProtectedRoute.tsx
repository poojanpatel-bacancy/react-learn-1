import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user } = useContext(UserContext);
    if (!user) {
        return <Navigate to="/login" replace />;
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