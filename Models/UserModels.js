import { Sequelize, DataTypes } from "sequelize";

import db from "../config/Database.js";

const User = db.define("user", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

export default User;

// Jika tabel "user" belum ada, maka fungsi di bawah akan membuatnya

(async () => {
  await db.sync();
})();
