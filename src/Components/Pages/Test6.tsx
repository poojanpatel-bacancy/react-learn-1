import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    age: number;
    gender: string;
}

function Test6() {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User>({
        id: 0,
        name: "",
        age: 0,
        gender: ""
    });
    const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);

    const initialUsers = [
        { id: 1, name: "John Doe", age: 20, gender: "male" },
        { id: 2, name: "Jane Smith", age: 21, gender: "female" },
        { id: 3, name: "Alice Johnson", age: 22, gender: "female" },
    ];

    useEffect(() => {
        setUsers(initialUsers);
    }, []);

    const handleAddUser = () => {
        let newId = Math.floor(Math.random() * 10000);
        let newUser = { ...user, id: newId };
        let newUpdatedUsersArray = [...users, newUser];
        setUsers(newUpdatedUsersArray);
        resetForm();
    }

    const handleUpdateUser = () => {
        debugger;
        console.log(user);
        
        let newUpdatedUsersArray = users.map(u => u.id === user.id ? user : u);
        console.log(newUpdatedUsersArray);

        setUsers(newUpdatedUsersArray);

        resetForm();
        setIsEditModeEnabled(false);
    }

    const handleEditUser = (userToEdit: User) => {
        debugger;
        setIsEditModeEnabled(true);
        setUser(userToEdit);
    }

    const handleDeleteUser = (userToDelete: User) => {
        debugger;
        let newUpdatedUsersArray = users.filter(u => u.id !== userToDelete.id);
        setUsers(newUpdatedUsersArray);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const resetForm = () => {
        setUser({
            id: 0,
            name: "",
            age: 0,
            gender: ""
        });
    }

    return (
        <div>
            <h2>Crud sample</h2>

            <h4>{isEditModeEnabled ? 'Edit User' : 'Add User'}</h4>
            <div className="mb-2">
                <input type="number" placeholder="Id" className="form-control mb-2" name="id" value={user.id} disabled />
                <input type="text" placeholder="Name" className="form-control mb-2" onChange={handleChange} name="name" value={user.name} />
                <input type="number" placeholder="Age" className="form-control mb-2" onChange={handleChange} name="age" value={user.age} />
                <input type="radio" name="gender" value="male" className="form-check-input mb-2" onChange={handleChange} checked={user.gender === "male"} /> Male
                <input type="radio" name="gender" value="female" className="form-check-input mb-2" onChange={handleChange} checked={user.gender === "female"} /> Female
                <br />
                {isEditModeEnabled ? (
                    <div>
                        <button onClick={handleUpdateUser} className="btn btn-success mb-2 me-2">Update</button>
                        <button onClick={() => {
                            resetForm();
                            setIsEditModeEnabled(false);
                        }} className="btn btn-secondary mb-2">Cancel</button>
                    </div>
                ) : (
                    <button onClick={handleAddUser} className="btn btn-primary mb-2">Add</button>
                )}
            </div>

            <br />
            <table className="table table-bordered">
                <thead className="table-group-divider">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>
                                <button onClick={() => handleEditUser(user)} className="btn btn-primary mx-2">Edit</button>
                                <button onClick={() => handleDeleteUser(user)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Test6;