const connection = require("./connection.js")

var orm = {
  selectAll: async function (cb) {
    connection.query(`SELECT * FROM burgers`,
      function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    )
  },
  insertOne: async function (name, cb) {
    connection.query(`INSERT INTO burgers SET ?`,
      {
        burger_name: name,
        devoured: false
      },
      function (err, result) {
        if (err) {
          throw err;
        }
        cb(result)
      }
    )
  },
  updatedOne: async function (id, cb) {
    connection.query(`UPDATE burgers SET devoured = true WHERE ?`,
      {
        id: id,
      },
      function (err, result) {
        if (err) {
          throw err;
        }
        cb(result)
      }
    )
  }
}

module.exports = orm;