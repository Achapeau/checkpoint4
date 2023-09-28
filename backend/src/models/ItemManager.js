const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "item" });
  }

  insert(item) {
    return this.database.query(
      `insert into ${this.table} (name, description, quantity, price, img_path) values (?, ?, ?, ?, ?)`,
      [item.name, item.description, item.quantity, item.price, item.imagePath]
    );
  }

  updateByUser(item) {
    return this.database.query(
      `update ${this.table} set quantity = ? where id = ?`,
      [item.quantityItem, item.productId]
    );
  }

  updateByAdmin(item) {
    return this.database.query(
      `update ${this.table} set name = ?, description = ?, quantity = ?, price = ?, img_path = ? where id = ?`,
      [
        item.name,
        item.description,
        item.quantity,
        item.price,
        item.imagePath,
        item.id,
      ]
    );
  }
}

module.exports = ItemManager;
