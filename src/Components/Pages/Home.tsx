import UserList from "../UserList";
import usePageTitle from "../../Hooks/usePageTitle";

function Home() {
    usePageTitle('Home | My App');
      
    return (
        <div>
            <h1>Home Page</h1>
            <UserList />
        </div>
    );
}

export default Home; 