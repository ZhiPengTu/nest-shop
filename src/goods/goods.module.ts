import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GooodsEntity } from './entity/goods.entity';
import{GoodsController} from "./goods.controller"
import{GoodsService} from "./services/goods.service"

@Module({
    imports:[TypeOrmModule.forFeature([GooodsEntity])],
    controllers:[GoodsController],
    providers:[GoodsService]
})
export class GoodsModule {}