import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import usePageTitle from "../../Hooks/usePageTitle";
import FormikYupExample from "../FormikYupExample";
import FormikExample from "../FormikExample";
import ReactHookFormExample from "../ReactHookFormExample";

// Main App Component
function Test2() {
    usePageTitle('Test2 | My App');
    const { user } = useContext(UserContext);

    return (
        <>
            <h2>Welcome, {user?.name}</h2>
            <p>Email: {user?.email}</p>
            <FormikYupExample />
            <FormikExample />
            <ReactHookFormExample />
        </>
    );
}

export default Test2;