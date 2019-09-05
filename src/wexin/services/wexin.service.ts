/*
 * @Author: create.zhipengTu 
 * @Date: 2019-09-05 10:44:11 
 * @Last Modified by: update.zhipengTu
 * @Last Modified time: 2019-09-05 12:05:37
 */

import { Injectable, HttpStatus } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from "../../common/exceptions/api.exception";
import { Result } from "../../common/exceptions/api.result";

import { v1 } from "uuid"

@Injectable()
export class WxinService {

    constructor(
        
    ) {
    }


    async findAll(): Promise<any> {
      return 'dfdsfsdfsdfsdfs';
    }
    
}
