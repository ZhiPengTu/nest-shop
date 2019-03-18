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
var UsersService_1;
const common_1 = require("@nestjs/common");
let UsersService = UsersService_1 = class UsersService {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return UsersService_1.users;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = UsersService_1.users.find(users => users.id == id);
            return {
                id: 3, name: '小壮', age: 20
            };
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            UsersService_1.users.push(user);
            return user;
        });
    }
    ;
    edit(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let index = UsersService_1.users.findIndex(item => item.id == user.id);
            if (index >= 0) {
                UsersService_1.users[index] = user;
            }
            return UsersService_1.users[index];
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let index = UsersService_1.users.findIndex(item => item.id == id);
            if (index >= 0) {
                UsersService_1.users.splice(index, 1);
            }
            return index >= 0;
        });
    }
};
UsersService.users = [
    { id: 1, name: '小明', age: 18 },
    { id: 2, name: '小红', age: 16 },
    { id: 3, name: '小壮', age: 20 },
];
UsersService = UsersService_1 = __decorate([
    common_1.Injectable()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map