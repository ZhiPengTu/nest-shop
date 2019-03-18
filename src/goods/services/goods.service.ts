import { Injectable } from '@nestjs/common';
import { IGoodsService } from '../interface/goods-service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GooodsEntity } from '../entity/goods.entity';

@Injectable()
export class GoodsService implements IGoodsService {
    constructor(
        @InjectRepository(GooodsEntity) private readonly GoodsRepository: Repository<GooodsEntity>,  // 使用泛型注入对应类型的存储库实例
    ) {

    }
    async findAll(): Promise<GooodsEntity[]> {
        return this.GoodsRepository.find();
    }
    async findOne(goods_id: number): Promise<GooodsEntity> {
        return this.GoodsRepository.findOne(goods_id);
    }
    async findByUserIds(user_id: number): Promise<GooodsEntity[]> {
        return this.GoodsRepository.find({ user_id });
    }

    async creat(goods: GooodsEntity): Promise<GooodsEntity> {
        // this.UerRepository.push(user);
        const time = new Date().getTime().toString();
        console.log(time)
        delete goods.goods_id;
        goods.created_at = time;
        goods.updated_at = time;
        console.log(goods.goods_status)
        goods.goods_status = goods.goods_status;
        goods.goods_remark = 'goods as not vlaue';
        return await this.GoodsRepository.save(goods);
    };
    async edit(goods: GooodsEntity): Promise<GooodsEntity> {
        // 更新数据时，删除 id，以避免请求体内传入 id
        delete goods.goods_id;
        delete goods.created_at;
        goods.updated_at = new Date().getTime().toString()
        await this.GoodsRepository.update(goods.goods_id, goods);
        const Allreadadd = await this.GoodsRepository.findOne(goods.goods_id);
        if (Allreadadd) {
            return Allreadadd;
        } else {
            console.log(222)
        }
    }


    async remove(goods_id: number): Promise<boolean> {
        const goods = await this.GoodsRepository.findOne(goods_id);
        if (!goods) {
            console.log(111)
            return false;
        } else {
            this.GoodsRepository.delete(goods_id);
        }
        return true;
    }
}
