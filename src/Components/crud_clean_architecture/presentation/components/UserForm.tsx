import React from 'react';
import type { UserFormProps } from '../../domain/types/User';

function UserForm({
    user,
    isEditMode,
    onSubmit,
    onCancel,
    onChange
}: UserFormProps) 
{
    console.log('UserForm rendered');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
    };

    return (
        <div className="mb-4">
            <h4>{isEditMode ? 'Edit User' : 'Add User'}</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input
                        type="number"
                        placeholder="Id"
                        className="form-control mb-2"
                        value={user.id}
                        disabled
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        className="form-control mb-2"
                        value={user.name}
                        onChange={(e) => onChange('name', e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Age"
                        className="form-control mb-2"
                        value={user.age}
                        onChange={(e) => onChange('age', parseInt(e.target.value) || 0)}
                        required
                    />
                    <div className="mb-2">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            className="form-check-input me-2"
                            checked={user.gender === "male"}
                            onChange={(e) => onChange('gender', e.target.value)}
                        />
                        <label className="me-3">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            className="form-check-input me-2"
                            checked={user.gender === "female"}
                            onChange={(e) => onChange('gender', e.target.value)}
                        />
                        <label>Female</label>
                    </div>
                </div>
                
                <div>
                    {isEditMode ? (
                        <>
                            <button type="submit" className="btn btn-success me-2">
                                Update
                            </button>
                            <button type="button" onClick={onCancel} className="btn btn-secondary">
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default React.memo(UserForm); 