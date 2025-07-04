import React from 'react';
import type { UserListProps } from '../../domain/types/User';

function UserTable({ users, onEdit, onDelete }: UserListProps) {
    console.log('UserTable rendered');
    return (
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
                            <button 
                                onClick={() => onEdit(user)} 
                                className="btn btn-primary me-2"
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => onDelete(user.id)} 
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default React.memo(UserTable); 