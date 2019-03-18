"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_moudule_1 = require("./config/config.moudule");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const Path = require("path");
const config_service_1 = require("./config/config.service");
const Orm = () => {
    const config = new config_service_1.ConfigService(`env/${process.env.NODE_ENV}.env`);
    return typeorm_1.TypeOrmModule.forRoot({
        type: 'mysql',
        host: config.databaseHost,
        port: config.databasePort,
        username: config.databaseUserName,
        password: config.databasePassword,
        database: config.databaseName,
        entities: [Path.resolve(__dirname, `../${config.ormLoadingPath}/**/*.entity{.ts,.js}`)],
        subscribers: [Path.resolve(__dirname, `../${config.ormLoadingPath}/**/*.entity{.ts,.js}`)],
        synchronize: config.databaseSynchronize,
        dropSchema: config.databaseDropSchema
    });
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [users_module_1.UsersModule, config_moudule_1.ConfigModule, Orm()],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map