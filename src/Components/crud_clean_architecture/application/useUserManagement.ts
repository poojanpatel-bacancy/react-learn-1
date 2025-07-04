import { useState, useCallback, useRef } from 'react';
import type { User, UserFormData } from '../domain/types/User';
import { UserService } from '../data/userService';
import { initialUsers } from '../data/initialData';

function useUserManagement() {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [currentUser, setCurrentUser] = useState<UserFormData>({
        id: 0,
        name: "",
        age: 0,
        gender: ""
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const isEditModeRef = useRef(false);

    const resetForm = useCallback(() => {
        setCurrentUser({
            id: 0,
            name: "",
            age: 0,
            gender: ""
        });
        setIsEditMode(false);
        isEditModeRef.current = false;
    }, []);

    const handleAddUser = useCallback((userData: UserFormData) => {
        const newUser = UserService.createUser({
            name: userData.name,
            age: userData.age,
            gender: userData.gender
        });
        setUsers(prevUsers => [...prevUsers, newUser]);
        resetForm();
    }, [resetForm]);

    const handleUpdateUser = useCallback((userData: UserFormData) => {
        setUsers(prevUsers => UserService.updateUser(prevUsers, userData as User));
        resetForm();
    }, [resetForm]);

    const handleEditUser = useCallback((user: User) => {
        setCurrentUser(user);
        setIsEditMode(true);
        isEditModeRef.current = true;
    }, []);

    const handleDeleteUser = useCallback((userId: number) => {
        if (isEditModeRef.current) {
            alert('Please cancel the edit mode before deleting a user.');
            return;
        }
        setUsers(prevUsers => UserService.deleteUser(prevUsers, userId));
    }, []);

    const handleCancelEdit = useCallback(() => {
        resetForm();
    }, [resetForm]);

    const handleFormChange = useCallback((field: keyof UserFormData, value: string | number) => {
        setCurrentUser(prev => ({ ...prev, [field]: value }));
    }, []); // Empty dependency array is correct for state setters

    return {
        users,
        currentUser,
        isEditMode,
        handleAddUser,
        handleUpdateUser,
        handleEditUser,
        handleDeleteUser,
        handleCancelEdit,
        handleFormChange
    };
}; 

export default useUserManagement;