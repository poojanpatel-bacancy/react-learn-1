import type { User } from '../domain/types/User';

export class UserService {
    private static generateId(): number {
        return Math.floor(Math.random() * 10000);
    }

    static createUser(userData: Omit<User, 'id'>): User {
        return {
            ...userData,
            id: this.generateId()
        };
    }

    static updateUser(users: User[], updatedUser: User): User[] {
        return users.map(user => user.id === updatedUser.id ? updatedUser : user);
    }

    static deleteUser(users: User[], userId: number): User[] {
        return users.filter(user => user.id !== userId);
    }

    static findUserById(users: User[], userId: number): User | undefined {
        return users.find(user => user.id === userId);
    }
} 