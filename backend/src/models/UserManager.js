const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(item) {
    return this.database.query(
      `insert into ${this.table} (first_name, last_name, nick_name, roles_for_the_future) values (?, ?, ?, ?)`,
      [item.firstName, item.lastName, item.nickName, item.rolesForTheFuture]
    );
  }
}

module.exports = UserManager;
