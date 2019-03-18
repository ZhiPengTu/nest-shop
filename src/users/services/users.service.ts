import { Injectable, HttpException } from '@nestjs/common';
import { UserEntity } from "../entity/user.entity"
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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


    async findAll(): Promise<UserEntity[]> {
        return this.UerRepository.find();
    }
    async findOne(user_id: string): Promise<UserEntity> {
        const user = this.UerRepository.findOne({ user_id });
        if (!user) {

            throw new HttpException(`删除失败，ID 为 '${user_id}' 的用户不存在`, 404);
        } else {
            return user;
        }

    }
    async create(user: UserEntity): Promise<UserEntity> {
        // this.UerRepository.push(user);
        const time = new Date().getTime().toString();
        console.log(time)
        user.user_id = v1();
        user.created_at = time;
        user.updated_at = time;
        return await this.UerRepository.save(user);
    };
    async edit(user: UserEntity): Promise<UserEntity> {
        await this.findOne(user.user_id);
        // 更新数据时，删除 id，以避免请求体内传入 id
        delete user.user_id;
        delete user.created_at;
        user.updated_at = new Date().getTime().toString()
        await this.UerRepository.update(user.user_id, user);
        const Allreadadd = await this.UerRepository.findOne(user.user_id);
        if (Allreadadd) {
            return Allreadadd;
        } else {
            console.log(222)
        }

    }

    async remove(user_id: string): Promise<boolean> {
        const user = await this.UerRepository.findOne(user_id);
        if (!user) {
            console.log(111)
            return false;
        } else {
            this.UerRepository.delete(user_id);
        }
        return true;

    }
}
