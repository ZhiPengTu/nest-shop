import { Controller, Get, Param, Query, Post, Put, Delete, Body,HttpStatus, Headers } from '@nestjs/common';
import { UsersService } from "./services/users.service";
import { UserIdPipe } from "./pipes/user-id.pipe";
import { Result } from "../common/exceptions/api.result";
import {CreateUserDto} from "./dtos/create-user.dto"
import {EditUserDto} from "./dtos/edit-user.dtos"




@Controller('users')
export class UsersController {
    constructor(private readonly userservice: UsersService) {

    }
    @Get('all')
    async findAll(): Promise<Result> {
        return await this.userservice.findAll();
    }
    @Get('findOne')
    async findOne(@Query("user_id", new UserIdPipe()) user_id): Promise<Result> {
        return await this.userservice.findOne(user_id);
    }
    @Post('creat')
    async creat(@Body() user:CreateUserDto):Promise<Result> {
        //TODO:创建
        return await this.userservice.create(user);
    }

    @Put('edit') 
    async eidt(@Body() user:EditUserDto):Promise<Result> {
        //TODO:编辑
        return await this.userservice.edit(user);
    }
    @Delete(":id")
    async remove(@Param("id", new UserIdPipe()) id): Promise<Result> {
        //TODO:删除
        return await this.userservice.remove(id);
    }

}
