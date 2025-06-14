import Welcome from "../Welcome";
import { useEffect } from "react";

function Contact() {
    useEffect(() => {
        document.title = 'Contact | My App';
    }, []);

    return (
        <div>
            <h1>Contact Page</h1>
            <Welcome name="Sara test" />
        </div>
    );
}

export default Contact; 