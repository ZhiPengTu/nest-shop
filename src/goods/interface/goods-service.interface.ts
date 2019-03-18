import {GooodsEntity} from "../entity/goods.entity";

export interface IGoodsService {
    findAll(): Promise<GooodsEntity[]>;
    findOne(goods_id: number): Promise<GooodsEntity>;
    findByUserIds(user_id: number): Promise<GooodsEntity[]>;
    creat(GooodsEntity):Promise<GooodsEntity>;
    edit(GooodsEntity): Promise<GooodsEntity>;
    remove(goods_id: number): Promise<boolean>;
}