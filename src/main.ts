/*
 * @Author: ZhiPengTu 
 * @Date: 2019-09-05 14:37:34 
 * @Last Modified by: ZhiPengTu
 * @Last Modified time: 2019-09-05 14:54:06
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";
import { ApiParamsValidationPipe } from "./common/pipes/api-params-validation.pipe";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ApiParamsValidationPipe());
  
  app.setGlobalPrefix('api'); /* 公共路由前缀 */
  await app.listen(3000);
}
bootstrap();
