import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class UserIdPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): Promise<number>;
}
