module.exports = {
  client: process.env.DATABASE_URL ? "pg" : "better-sqlite3",
  connection: process.env.DATABASE_URL || {
    filename: "./local.db",
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./migrations",
  },
};
