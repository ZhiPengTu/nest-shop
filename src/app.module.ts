import { Module ,DynamicModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.moudule';
import { UsersModule } from './users/users.module';
import { GoodsModule } from './goods/goods.module';
import { weixinModule } from './wexin/weixin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigService} from './config/config.service';
import * as Path from 'path';


const Orm = (): DynamicModule => {

  const config = new ConfigService(`env/${process.env.NODE_ENV}.env`);
  
  return TypeOrmModule.forRoot({
    type: 'mysql',
    host: config.databaseHost,
    port: config.databasePort,
    username: config.databaseUserName,
    password: config.databasePassword,
    database: config.databaseName,
    entities: [Path.resolve(__dirname, `../${ config.ormLoadingPath }/**/*.entity{.ts,.js}`)],
    subscribers: [Path.resolve(__dirname, `../${ config.ormLoadingPath }/**/*.entity{.ts,.js}`)],
    synchronize: config.databaseSynchronize,
    dropSchema: config.databaseDropSchema
  });
}
// console.log(Orm)

@Module({
  imports: [UsersModule,ConfigModule,Orm(),GoodsModule,weixinModule],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
