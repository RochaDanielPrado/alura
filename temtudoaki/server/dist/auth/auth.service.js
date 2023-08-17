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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../app/users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
const token_service_1 = require("../app/token/token.service");
let AuthService = exports.AuthService = class AuthService {
    constructor(userService, jwtService, tokenService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.tokenService = tokenService;
    }
    async validateUser(email, password) {
        let user;
        try {
            user = await this.userService.findOne(email);
        }
        catch (error) {
            return null;
        }
        const isPasswordValid = (0, bcrypt_1.compareSync)(password, user.password);
        if (!isPasswordValid)
            return null;
        return user;
    }
    async login(user) {
        const payload = { username: user.email, sub: user.id };
        const token = this.jwtService.sign(payload);
        this.tokenService.save(token, user.email, user.id);
        return {
            access_token: token,
        };
    }
    async loginToken(token) {
        const user = await this.tokenService.getUsuarioByToken(token);
        if (user) {
            return this.login(user);
        }
        else {
            return new common_1.HttpException({
                errorMessage: 'Token inválido',
            }, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        token_service_1.TokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map