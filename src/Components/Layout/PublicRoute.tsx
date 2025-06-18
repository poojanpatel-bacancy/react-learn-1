import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function PublicRoute({ children }: { children: React.ReactNode }) {
    debugger;
    const { user } = useContext(UserContext);

    if (user) {
        // User is logged in, don't allow access to login page
        return <Navigate to="/test2" replace />;
    }

    // User is not logged in, allow access
    return <>{children}</>;
}

export default PublicRoute;