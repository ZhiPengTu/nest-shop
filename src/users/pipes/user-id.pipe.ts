import { ArgumentMetadata, Injectable, PipeTransform, HttpStatus } from '@nestjs/common';
import { ApiException } from "../../common/exceptions/api.exception";
import { ApiErrorCode } from "../../common/enums/api-error-code.enum";

@Injectable()
export class UserIdPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
   
    if ( typeof value !== 'string') {
      throw new ApiException('用户ID无效', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
