import { User } from "../interfaces/user.interface";
import { IUserService } from "../interfaces/user-service.interface";
export declare class UsersService implements IUserService {
    private static users;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(user: User): Promise<User>;
    edit(user: User): Promise<User>;
    remove(id: number): Promise<boolean>;
}
