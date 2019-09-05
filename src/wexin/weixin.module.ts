/*
 * @Author: create.zhipengTu 
 * @Date: 2019-09-05 11:03:58 
 * @Last Modified by: update.zhipengTu
 * @Last Modified time: 2019-09-05 11:56:30
 */
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { accessTokenEntity } from './entity/accessToken.entity';
import { WexinController } from "./wexin.controller";
import { WxinService } from "./services/wexin.service";

console.log(WexinController)
@Module({
    imports: [TypeOrmModule.forFeature([accessTokenEntity])],
    controllers: [WexinController],
    providers: [WxinService],
    exports:[WxinService]
})
export class weixinModule {}
