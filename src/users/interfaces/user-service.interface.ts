import { UserEntity } from "../entity/user.entity"
import {Result} from "../../common/exceptions/api.result";
export interface IUserService {
    findAll(): Promise<Result>;
    findOne(user_id: string): Promise<Result>;
    create(UserEntity):Promise<Result>;
    edit(UserEntity): Promise<Result>;
    remove(user_id: string): Promise<Result>;

}