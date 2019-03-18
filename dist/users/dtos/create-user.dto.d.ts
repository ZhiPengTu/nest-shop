import { User } from "../interfaces/user.interface";
export declare class CreateUserDto implements User {
    readonly id: number;
    readonly name: string;
    readonly age: number;
}
