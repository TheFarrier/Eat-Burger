const orm = require("../config/orm.js")

const burger = {
  selectAll: function(cb){
    orm.selectAll()
  },
  insertOne: function(){
    orm.insertOne()
  },
  updateOne: function(){
    orm.updatedOne()
  }
};

// Export for controller
module.exports = burger;