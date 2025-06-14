import { useEffect } from "react";
import UserList from "../UserList";

function Home() {
    useEffect(() => {
        document.title = 'Home | My App';
      }, []);
      
    return (
        <div>
            <h1>Home Page</h1>
            <UserList />
        </div>
    );
}

export default Home; 