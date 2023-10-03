import { Sequelize } from "sequelize";

const db = new Sequelize("simple_database", "root", "123456", {
  host: "127.0.0.1",
  dialect: "mysql",
});

db.authenticate()
  .then(() => `Database sudah terhubung`)
  .catch((error) => console.log(error));

export default db;
