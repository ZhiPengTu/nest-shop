import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { AuthModule } from "../users/auto/auth.module";
import { UsersController } from "./users.controller";
import { UsersService } from "./services/users.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity]), forwardRef(() => AuthModule)],
    controllers: [UsersController],
    providers: [UsersService],
    exports:[UsersService]
})
export class UsersModule { }
