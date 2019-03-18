import { Injectable } from '@nestjs/common';
import {ConfigService} from './config/config.service'


@Injectable()
export class AppService {
  constructor(config: ConfigService) {
    if (config) {
      console.log(config)
      // Authorization is enabled
    }
  }
  getHello(): string {
    return 'Hello World!';
  }
}
