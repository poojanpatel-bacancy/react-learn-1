import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";


// Main App Component
function Test2() {
    const { user } = useContext(UserContext);
    useEffect(() => {
        document.title = 'Test2';
    }, []);


    return (
        <>
            <h2>Welcome, {user?.name}</h2>
            <p>Email: {user?.email}</p>
        </>
    );
}

export default Test2;