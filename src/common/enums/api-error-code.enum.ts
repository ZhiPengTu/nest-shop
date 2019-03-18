export enum ApiErrorCode {
    TIMEOUT = -1, // 系统繁忙
    SUCCESS = 0, // 成功

    USER_ID_INVALID = 10001, // 用户 ID 无效
    USER_NAME_INVALID = 10002, // 用户 姓名 无效
    USER_AGE_INVALID = 10003, // 用户 年龄 无效
    USER_WEID_INVALID=1004,



    GOODS_ID_INVALID=2001,//商品ID无效
    GOODS_NAME_INVALID=2002,//商品名称无效
    GOODS_LABLE_INVALID=2003,//商品标签 无效
    GOODS_AS_INVALID=2004,//
    GOODS_DESC_INVALID=2005,//商品详情无效
    GOODS_BRAND_INVALID=2006,//商品品牌无效
}