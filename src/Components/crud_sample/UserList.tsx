import type { User } from "./User";
import React from "react";

function UserList(props: { users: User[], handleEditUser: (user: User) => void, handleDeleteUser: (user: User) => void }) {
    const { users, handleEditUser, handleDeleteUser } = props;

    console.log("UserList rendered.");

    return (
        <>
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
        </>
    );
}

export default React.memo(UserList);