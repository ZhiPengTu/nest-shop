import { ConfigService } from './config/config.service';
export declare class AppService {
    constructor(config: ConfigService);
    getHello(): string;
}
