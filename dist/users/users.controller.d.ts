import { User } from './interfaces/user.interface';
import { UsersService } from "./services/users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
export declare class UsersController {
    private readonly userservice;
    constructor(userservice: UsersService);
    findAll(): Promise<User[]>;
    findOne(id: any): Promise<User>;
    creat(user: CreateUserDto): Promise<User>;
    eidt(user: CreateUserDto): Promise<User>;
    remove(id: any): Promise<boolean>;
}
