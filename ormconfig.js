// ormconfig.js
console.log('process.env.DB_HOST:', process.env.DB_HOST);
module.exports = {
  type: process.env.DB_TYPE || 'mysql',
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'testdb',
  synchronize: process.env.DB_SYNCHRONIZE || false,
  logging: process.env.DB_LOGGING ?? true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
};
