export interface User {
    id: number;
    name: string;
    age: number;
    gender: string;
}

export interface UserFormData {
    id: number;
    name: string;
    age: number;
    gender: string;
}

export interface UserListProps {
    users: User[];
    onEdit: (user: User) => void;
    onDelete: (id: number) => void;
}

export interface UserFormProps {
    user: UserFormData;
    isEditMode: boolean;
    onSubmit: (user: UserFormData) => void;
    onCancel: () => void;
    onChange: (field: keyof UserFormData, value: string | number) => void;
} 