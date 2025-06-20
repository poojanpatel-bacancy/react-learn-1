import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Unauthorized</h1>
            <p>You do not have the necessary permissions to access this page.</p>
            <button onClick={goBack} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                Go Back
            </button>
        </div>
    );
};

export default Unauthorized;
