import { useContext } from "react";
import usePageTitle from "../../Hooks/usePageTitle";
import { UserContext } from "../../Context/UserContext";

function About() {
    usePageTitle('About | My App');
    const { user } = useContext(UserContext);

    // ✅ If user is not admin, don't render the page
    if (user?.role !== 'admin') {
        return null;
    }

    return (
        <div>
            <h1>About Page</h1>
            <p>Welcome, Admin! This page is only visible to admin users.</p>
            <p>User Role: {user.role}</p>
            <p>User Name: {user.name}</p>
        </div>
    );
}

export default About; 