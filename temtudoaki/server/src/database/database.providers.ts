import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
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