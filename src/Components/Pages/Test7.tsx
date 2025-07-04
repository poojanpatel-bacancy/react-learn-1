import { useCallback } from 'react';
import { useUserManagement } from '../crud_clean_architecture/application/useUserManagement';
import UserForm from '../crud_clean_architecture/presentation/components/UserForm';
import UserTable from '../crud_clean_architecture/presentation/components/UserTable';

function Test7() {
    const {
        users,
        currentUser,
        isEditMode,
        handleAddUser,
        handleUpdateUser,
        handleEditUser,
        handleDeleteUser,
        handleCancelEdit,
        handleFormChange
    } = useUserManagement();

    const handleSubmit = useCallback((userData: any) => {
        if (isEditMode) {
            handleUpdateUser(userData);
        } else {
            handleAddUser(userData);
        }
    }, [isEditMode, handleUpdateUser, handleAddUser]);

    return (
        <div className="container">
            <h2>CRUD with Clean Architecture</h2>
            
            <UserForm
                user={currentUser}
                isEditMode={isEditMode}
                onSubmit={handleSubmit}
                onCancel={handleCancelEdit}
                onChange={handleFormChange}
            />

            <UserTable
                users={users}
                onEdit={handleEditUser}
                onDelete={handleDeleteUser}
            />
        </div>
    );
};

export default Test7; 