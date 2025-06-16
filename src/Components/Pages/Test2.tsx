import { useEffect } from "react";

function Test2() {
    useEffect(() => {
        document.title = 'Test2';
    }, []);

    return (
        <div>
            <h1>Test2</h1>
        </div>
    );
}

export default Test2;