import { Controller, Get, Query, Body, Post,Put } from '@nestjs/common';
import { GoodsService } from "./services/goods.service";
import { Goods } from "./interface/goods.interface";
import {GoodsIdPipe,UserIdPipe} from "./pipes/parmas-pipes.pipe";
import{ CreateGoodsDto} from "./dtos/creat-goods.dtos"

@Controller('goods')
export class GoodsController {
    constructor(private readonly goodservice: GoodsService) {

    }
    @Get('all')
    async findAll(): Promise<Goods[]> {
        return await this.goodservice.findAll();
    }
    @Get('findOne')
    async findOne(@Query("goods_id",new GoodsIdPipe()) goods_id): Promise<Goods> {
        return await this.goodservice.findOne(goods_id);
    }
    @Get('findByUserId')
    async findByUserId(@Query("user_id",new UserIdPipe())user_id): Promise<Goods[]> {
        return await this.goodservice.findByUserIds(user_id);
    }

    @Post('creat')
    async creat(@Body() goods: CreateGoodsDto): Promise<Goods> {
        return await this.goodservice.creat(goods);
    }

    @Put('edit')
    async edit(@Body() goods: CreateGoodsDto): Promise<Goods> {
        return await this.goodservice.creat(goods);
    }


}
