/*
 * @Author: ZhiPengTu 
 * @Date: 2019-09-05 14:25:49 
 * @Last Modified by: ZhiPengTu
 * @Last Modified time: 2019-09-05 14:26:34
 */


import { Controller, Get, Param, Query, Post, Put, Delete, Body, UseGuards ,Inject} from '@nestjs/common';
import { Result } from "../common/exceptions/api.result";

import { WxinService} from "./services/wexin.service"

@Controller('weixin')
export class WexinController {
    constructor(private readonly wxinService: WxinService ) {

    }
    @Post('test')
    async getAccessToken(): Promise<any> {
        return await this.wxinService.findAll();
    }
    @Post("getAccessToken2")
    async getAccessToken2():Promise<any>{
        return await this.wxinService.findAll();
    }
}
