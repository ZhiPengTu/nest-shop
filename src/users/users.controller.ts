/*
 * @Author: ZhiPengTu 
 * @Date: 2019-09-05 15:41:10 
 * @Last Modified by:   ZhiPengTu 
 * @Last Modified time: 2019-09-05 15:41:10 
 */
import { Controller, Get, Param, Query, Post, Put, Delete, Body, UseGuards ,Inject} from '@nestjs/common';
import { UsersService } from "./services/users.service";
import { UserIdPipe } from "./pipes/user-id.pipe";
import { Result } from "../common/exceptions/api.result";
import { CreateUserDto } from "./dtos/create-user.dto"
import { EditUserDto } from "./dtos/edit-user.dtos"
// import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../users/auto/auth.service';



@Controller('users')
export class UsersController {
    constructor(private readonly userservice: UsersService, @Inject(AuthService) private readonly authService: AuthService, ) {

    }
    @Post('login')
    async login(@Body() body: { account: string, password: string }): Promise<Result> {
        console.log(body.account)
        await this.userservice.login(body.account, body.password);
        const accessToken = await this.authService.signIn();
        return { code: 200, message: '登录成功', data: accessToken };
    }

    @Get('all')
    async findAll(): Promise<Result> {
        return await this.userservice.findAll();
    }
    @Get('findOne')
    // @UseGuards(AuthGuard())
    async findOne(@Query("user_id", new UserIdPipe()) user_id): Promise<Result> {
        return await this.userservice.findOne(user_id);
    }
    @Post('creat')
    async creat(@Body() user: CreateUserDto): Promise<Result> {
        //TODO:创建
        return await this.userservice.create(user);
    }

    @Put('edit')
    async eidt(@Body() user: EditUserDto): Promise<Result> {
        //TODO:编辑
        return await this.userservice.edit(user);
    }
    @Delete(":id")
    async remove(@Param("id", new UserIdPipe()) id): Promise<Result> {
        //TODO:删除
        return await this.userservice.remove(id);
    }
}
