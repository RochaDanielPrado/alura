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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
const typeorm_1 = require("typeorm");
const token_entidy_1 = require("./token.entidy");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("@nestjs/typeorm");
let TokenService = exports.TokenService = class TokenService {
    constructor(tokenRepository, userService, authService) {
        this.tokenRepository = tokenRepository;
        this.userService = userService;
        this.authService = authService;
    }
    async save(hash, username, userid) {
        let objToken = await this.tokenRepository.findOneBy({ username: username });
        if (objToken) {
            this.tokenRepository.update(objToken.id, {
                hash: hash,
            });
        }
        else {
            this.tokenRepository.insert({
                hash: hash,
                username: username,
                userid: userid,
            });
        }
    }
    async refreshToken(oldToken) {
        let objToken = await this.tokenRepository.findOneBy({ hash: oldToken });
        if (objToken) {
            let user = await this.userService.findOne(objToken.username);
            return this.authService.login(user);
        }
        else {
            return new common_1.HttpException({
                errorMessage: 'Token inválido',
            }, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async getUsuarioByToken(token) {
        token = token.replace('Bearer ', '').trim();
        let objToken = await this.tokenRepository.findOneBy({ hash: token });
        if (objToken) {
            let user = await this.userService.findOne(objToken.username);
            return user;
        }
        else {
            return null;
        }
    }
    findAll() {
        return this.tokenRepository.find();
    }
};
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(token_entidy_1.TokenEntity)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        users_service_1.UsersService,
        auth_service_1.AuthService])
], TokenService);
//# sourceMappingURL=token.service.js.map