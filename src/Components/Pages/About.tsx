import { useEffect } from "react";

function About() {
    useEffect(() => {
        document.title = 'About | My App';
    }, []);

    return (
        <div>
            <h1>About Page</h1>
            <p>This is a sample React Router example.</p>
        </div>
    );
}

export default About; 