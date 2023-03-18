module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cct0n52en0hinule02rg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_bq99'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'j5QuAR9ru623eVwnnfsOa3O6n7T3toSX'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
