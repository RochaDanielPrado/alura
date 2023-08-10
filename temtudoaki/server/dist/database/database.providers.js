"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await typeorm_1.createConnection({
            type: 'mysql',
            host: '162.241.61.183',
            port: 3306,
            username: 'dexoveco_daniel',
            password: 'Gis@1804',
            database: 'dexoveco_temtudaki',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: false,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map