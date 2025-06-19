import usePageTitle from "../../Hooks/usePageTitle";
import Welcome from "../Welcome";

function Contact() {
    usePageTitle('Contact | My App');

    return (
        <div>
            <h1>Contact Page</h1>
            <Welcome name="Sara test using props" />
        </div>
    );
}

export default Contact; 