"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const api_error_code_enum_1 = require("../../common/enums/api-error-code.enum");
class CreateUserDto {
}
__decorate([
    class_transformer_1.Type(() => Number),
    class_validator_1.IsInt({ message: '用户ID必须是整数', context: { errorCode: api_error_code_enum_1.ApiErrorCode.USER_ID_INVALID } }),
    class_validator_1.Min(1, { message: '用户ID必须大于等于1', context: { errorCode: api_error_code_enum_1.ApiErrorCode.USER_ID_INVALID } }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '用户姓名是必不可少的', context: { errorCode: api_error_code_enum_1.ApiErrorCode.USER_NAME_INVALID } }),
    class_validator_1.IsString({ message: '用户姓名是必不可少的', context: { errorCode: api_error_code_enum_1.ApiErrorCode.USER_NAME_INVALID } }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    class_transformer_1.Type(() => Number),
    class_validator_1.IsInt({ message: '用户年龄必须是整数', context: { errorCode: api_error_code_enum_1.ApiErrorCode.USER_AGE_INVALID } }),
    class_validator_1.Min(1, { message: '用户年龄必须大于1', context: { errorCode: api_error_code_enum_1.ApiErrorCode.USER_AGE_INVALID } }),
    class_validator_1.Max(200, { message: '用户年龄必须小于200', context: { errorCode: api_error_code_enum_1.ApiErrorCode.USER_AGE_INVALID } }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "age", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map