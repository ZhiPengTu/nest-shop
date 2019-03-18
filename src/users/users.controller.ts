import { Controller, Get, Param, Query, Post, Put, Delete, Body, HttpStatus } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from "./services/users.service";
import { UserIdPipe } from "./pipes/user-id.pipe";
import {CreateUserDto} from "./dtos/create-user.dto"
import {EditUserDto} from "./dtos/edit-user.dtos"




@Controller('users')
export class UsersController {
    constructor(private readonly userservice: UsersService) {

    }
    @Get('all')
    async findAll(): Promise<User[]> {
        return await this.userservice.findAll();
    }
    @Get('findOne')
    async findOne(@Query("user_id", new UserIdPipe()) user_id): Promise<User> {
        return await this.userservice.findOne(user_id);
    }
    @Post('creat')
    async creat(@Body() user:CreateUserDto):Promise<User> {
        //TODO:创建
        console.log(user)
        return await this.userservice.create(user);
    }

    @Put('edit') 
    async eidt(@Body() user:EditUserDto):Promise<User> {
        //TODO:编辑
        return await this.userservice.edit(user);
    }
    @Delete(":id")
    async remove(@Param("id", new UserIdPipe()) id): Promise<boolean> {
        //TODO:删除
        return await this.userservice.remove(id);
    }

}
