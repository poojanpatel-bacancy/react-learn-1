import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import usePageTitle from "../Layout/usePageTitle";

// Main App Component
function Test2() {
    usePageTitle('Test2 | My App');
    const { user } = useContext(UserContext);

    return (
        <>
            <h2>Welcome, {user?.name}</h2>
            <p>Email: {user?.email}</p>
        </>
    );
}

export default Test2;