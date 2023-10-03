import { Sequelize } from "sequelize";

const db = new Sequelize("railway", "root", "OW9URW30VcKO9WlzWqGK", {
  host: "containers-us-west-47.railway.app",
  port: "7160",
  dialect: "mysql",
});

db.authenticate()
  .then(() => `Database sudah terhubung`)
  .catch((error) => console.log(error));

export default db;
