import { Injectable, HttpStatus } from '@nestjs/common';
import { UserEntity } from "../entity/user.entity"
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from "../../common/exceptions/api.exception";
import { Result } from "../../common/exceptions/api.result";
import { IUserService } from "../interfaces/user-service.interface";
import { v1 } from "uuid"

@Injectable()
export class UsersService implements IUserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly UerRepository: Repository<UserEntity>,  // 使用泛型注入对应类型的存储库实例
        // private readonly uuid:uuid<uuid>
    ) {
    }


    async findAll(): Promise<Result> {
        const UserList = await this.UerRepository.find();
        return {
            code: 200,
            message: '查询成功',
            data: {
                length: UserList.length,
                list: UserList
            }
        };
    }
    async findOne(user_id: string): Promise<Result> {
        const user = await this.UerRepository.findOne({ user_id: user_id });
        if (!user) {
            throw new ApiException('用户ID无效', 444, HttpStatus.BAD_REQUEST);
        } else {
            return {
                code: 1,
                message: '',
                data: user
            };
        }

    }
    async create(user: UserEntity): Promise<Result> {
        // this.UerRepository.push(user);
        const time = new Date().getTime().toString();
        user.user_id = v1();
        user.created_at = time;
        user.updated_at = time;
        return {
            code: 1,
            message: '',
            data: await this.UerRepository.save(user)
        };
    };
    async edit(user: UserEntity): Promise<Result> {
        const oldUser = await this.UerRepository.findOne({ user_id: user.user_id });
        // 更新数据时，删除 id，以避免请求体内传入 id

        if (!oldUser) {
            throw new ApiException('用户ID无效', 444, HttpStatus.BAD_REQUEST);
        }
        delete user.created_at;
        oldUser.updated_at = new Date().getTime().toString()
        oldUser.name = user && user.name ? user.name.toString() : oldUser.name;
        oldUser.age = user && user.age ? user.age : oldUser.age;
        oldUser.we_uid = user && user.we_uid ? user.we_uid : oldUser.we_uid;
        await this.UerRepository.save(oldUser);
        const Allreadadd = await this.UerRepository.findOne({ user_id: oldUser.user_id });
        if (!Allreadadd) {
            throw new ApiException('更新失败', 444, HttpStatus.BAD_REQUEST);
        } else {
            return {
                code: 200,
                message: '更新成功',
                data: Allreadadd
            };
        }

    }

    async remove(user_id: string): Promise<Result> {
        const user = await this.UerRepository.findOne(user_id);
        if (!user) {
            throw new ApiException('不存在此用户', 444, HttpStatus.BAD_REQUEST);
        } else {
            this.UerRepository.delete(user_id);
        }
        return {
            code: 200,
            message: '删除成功',
            data: ''
        };

    }
    
    async findOneByAccount(user_id: string): Promise<any> {
        return await this.UerRepository.findOne(user_id);
    }

    async login(account: string, password: string): Promise<void|any> {
        // const user = await this.findOneByAccount(account);
        const user = await  this.UerRepository.findOne({ user_id: account });
        if (!user) throw new ApiException('登录账号有误', 406, HttpStatus.BAD_REQUEST);

        if(user.user_id==account&&user.name==password){
            return 'success'
        }else{
            throw new ApiException('登录密码有误', 406, HttpStatus.BAD_REQUEST); 
        }
    }
}
