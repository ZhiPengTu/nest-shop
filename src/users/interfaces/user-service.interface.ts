import { UserEntity } from "../entity/user.entity"
export interface IUserService {
    findAll(): Promise<UserEntity[]>;
    findOne(user_id: string): Promise<UserEntity>;
    create(UserEntity):Promise<UserEntity>;
    edit(UserEntity): Promise<UserEntity>;
    remove(user_id: string): Promise<boolean>;

}