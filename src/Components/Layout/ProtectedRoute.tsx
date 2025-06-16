import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";

function ProtectedRoute({ children }: { children: React.ReactNode }) {

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
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