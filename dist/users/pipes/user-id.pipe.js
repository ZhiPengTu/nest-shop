"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const api_exception_1 = require("../../common/exceptions/api.exception");
const api_error_code_enum_1 = require("../../common/enums/api-error-code.enum");
let UserIdPipe = class UserIdPipe {
    transform(value, metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            let parVal = parseInt(value);
            if (isNaN(value) || typeof parVal !== 'number' || parVal <= 0) {
                throw new api_exception_1.ApiException('用户ID无效', api_error_code_enum_1.ApiErrorCode.USER_ID_INVALID, common_1.HttpStatus.BAD_REQUEST);
            }
            return parVal;
        });
    }
};
UserIdPipe = __decorate([
    common_1.Injectable()
], UserIdPipe);
exports.UserIdPipe = UserIdPipe;
//# sourceMappingURL=user-id.pipe.js.map