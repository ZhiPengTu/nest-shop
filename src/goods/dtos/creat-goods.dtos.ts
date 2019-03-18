import { Goods } from "../interface/goods.interface";
import { Type } from "class-transformer";
//类型验证
import { IsString, IsInt, IsNotEmpty, Min, Max, IsEmpty } from 'class-validator';
//类型限制
import { ApiErrorCode } from "../../common/enums/api-error-code.enum";

export class CreateGoodsDto implements Goods {
    @Type(()=>Number)   
    @IsEmpty({ message: '商品ID必须是整数', context: { errorCode: ApiErrorCode.GOODS_ID_INVALID } })
    readonly goods_id: number;

    
    @IsNotEmpty({ message: '分类id是必不可少的', context: { errorCode: ApiErrorCode.USER_NAME_INVALID } })
    readonly category_id: number;

    @IsNotEmpty({ message: '商品名是必不可少的', context: { errorCode: ApiErrorCode.USER_NAME_INVALID } })
    @IsString({ message: '商品名不是string', context: { errorCode: ApiErrorCode.USER_NAME_INVALID } })
    readonly goods_name: string;
    

    @Type(()=>String)
    @IsEmpty({ message: 'goods_as可以不传', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    readonly goods_as: string;

    @Type(()=>String)
    @IsNotEmpty({ message: '商品标签是必不可少的', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    @IsString({ message: '商品标签不是string', context: { errorCode: ApiErrorCode.USER_NAME_INVALID } })
    readonly goods_lable: string;

    @Type(()=>String)
    @IsNotEmpty({ message: '品牌', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    readonly goods_brand: string;

    @Type(()=>String)
    @IsNotEmpty({ message: '商品描述是必不可少的', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    @IsString({ message: '商品标签类型为字符串', context: { errorCode: ApiErrorCode.USER_NAME_INVALID } })
    readonly goods_desc: string;

    @Type(()=>Number)
    @IsNotEmpty({ message: '所属用户是必不可少的', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    @IsInt({ message: '用户必须是整数', context: { errorCode: ApiErrorCode.USER_NAME_INVALID } })
    readonly user_id: number;

    @Type(()=>String)
    @IsNotEmpty({ message: '', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    readonly goods_seq: string;


    @Type(()=>Number)
    @IsInt({ message: '状态必须是整数', context: { errorCode: ApiErrorCode.USER_NAME_INVALID } })
    @Min(1,{ message: '状态长度必须是1', context: { errorCode: ApiErrorCode.USER_NAME_INVALID } })
    @IsNotEmpty({ message: '状态是必不可少的', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    readonly goods_status: number;
    
    // @Type(()=>String)
    @IsEmpty({ message: '', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    readonly goods_remark: string;
    
    @Type(()=>String)
    @IsEmpty({ message: '商品创建时间不用传', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    readonly created_at: string;
    
    @Type(()=>String)
    @IsEmpty({ message: '商品更新时间不用传', context: { errorCode: ApiErrorCode.USER_AGE_INVALID } })
    readonly updated_at: string;
}