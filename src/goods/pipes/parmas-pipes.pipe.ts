import { ArgumentMetadata, Injectable, PipeTransform ,HttpStatus} from '@nestjs/common';
import { ApiException } from "../../common/exceptions/api.exception";
import { ApiErrorCode } from "../../common/enums/api-error-code.enum";

@Injectable()
export class GoodsIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    let parVal = parseInt(value);
    if (isNaN(value) || typeof parVal !== 'number' || parVal <= 0) {
      throw new ApiException('商品ID无效-数字', ApiErrorCode.GOODS_ID_INVALID, HttpStatus.BAD_REQUEST);
    }
    return parVal;
  }
}

@Injectable()
export class UserIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    let parVal = parseInt(value);
    if (isNaN(value) || typeof parVal !== 'number' || parVal <= 0) {
      throw new ApiException('用户ID无效', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);
    }
    return parVal;
  }
}