const AbstractManager = require("./AbstractManager");

class BasketManager extends AbstractManager {
  constructor() {
    super({ table: "basket" });
  }

  insert({ userId, productId, quantity, totalPrice }) {
    return this.database.query(
      `insert into ${this.table} (user_id, product_id, quantity, total_price) values (?, ?, ?, ?)`,
      [userId, productId, quantity, totalPrice]
    );
  }

  update({ userId, productId, quantity, totalPrice, id }) {
    return this.database.query(
      `update ${this.table} set user_id = ?, product_id = ?, quantity = ?, total_price = ? where id = ?`,
      [userId, productId, quantity, totalPrice, id]
    );
  }

  findByUserId(userId) {
    return this.database.query(
      `select * from ${this.table} b join user u on u.id = b.user_id where u.id = ? order by id`,
      [userId]
    );
  }
}

module.exports = BasketManager;
