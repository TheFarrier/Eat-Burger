const orm = require("../config/orm.js")

const burger = {
  selectAll: function (cb) {
    orm.selectAll(function (res) {
      cb(res);
    });
  },
  insertOne: function (name, callback) {
    orm.insertOne(name, callback)
  },
  updateOne: function (id, callback) {
    orm.updatedOne(id, callback)
  }
};

// Export for controller
module.exports = burger;