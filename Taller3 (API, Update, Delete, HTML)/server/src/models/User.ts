interface IUser {
    id: number;
    name: string;
    age: number;
    email: string;
}

class User {
    id: number;
    name: string;
    age: number;
    email: string;

    constructor(id: number, name: string, age: number, email: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
    }

    toJSON(): IUser {
        return {
            id: this.id,
            name: this.name,
            age: this.age,
            email: this.email
        }
    }
}

export { User, IUser };