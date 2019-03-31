import { User } from "../interfaces/user.interface";
import { Type } from "class-transformer";
//类型验证
import { IsString, IsInt, IsNotEmpty, Min, Max, IsEmpty, IsEmail } from 'class-validator';
//类型限制
import { ApiErrorCode } from "../../common/enums/api-error-code.enum";

export class CreateUserDto implements User {
    @Type(()=>Number)   
    @IsEmpty({ message: '用户id不必传', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    readonly id: number;

    @Type(()=>String)   
    @IsEmpty({ message: '用户id不必传', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    readonly user_id: string;

    
    @IsNotEmpty({ message: '用户姓名是必不可少的', context: { errorCode: ApiErrorCode.USER_NAME_INVALID } })
    @IsString({ message: '用户姓名是必不可少的', context: { errorCode: ApiErrorCode.USER_NAME_INVALID } })
    readonly name: string;
    
    @Type(()=>Number)
    @IsInt({ message: '用户年龄必须是整数', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    @Min(1, { message: '用户年龄必须大于1', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    @Max(200, { message: '用户年龄必须小于200', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    readonly age: number;

    @Type(()=>String)
    @IsNotEmpty({ message: '微信uid是必不可少的', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    readonly we_uid: string;

    @Type(()=>String)
    readonly email: string;

    // @Type(()=>String)
    @IsEmpty({ message: '创建时间', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    readonly created_at: string;
    
    // @Type(()=>String)
    @IsEmpty({ message: '更新时间', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    readonly updated_at: string;
}