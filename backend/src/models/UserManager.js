const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (first_name, last_name, nick_name, email, hashed_password) values (?, ?, ?, ?, ?)`,
      [user.firstName, user.lastName, user.nickName, user.email, user.password]
    );
  }

  findOneByEmail({ email }) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
