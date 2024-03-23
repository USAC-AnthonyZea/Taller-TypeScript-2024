import { User } from '../models/User'

class Database {
    private users: User[] = [];
    private idCounter: number = 1;

    // Create
    public createUser(name: string, age: number, email: string): User {
        
        // Crear un nuevo usuario
        const newUser = new User(this.idCounter, name, age, email);
        
        // Agregar el usuario a la base de datos
        this.users.push(newUser);

        // Incrementar el contador de IDs
        this.idCounter++;

        return newUser;
    }

    // Read
    public getUserById(id: number): User | undefined {
        return this.users.find( user => user.id === id );
    }

    // Read All
    public getAllUsers(): User[] {
        return this.users;
    }
}

let dbInstance = new Database();

export { dbInstance };