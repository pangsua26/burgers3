// import the orm to create functions that will interact with the database
const orm = require("../config/orm.js");

let burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
  },

  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
  //delete: function(condition, cb) {
    //orm.delete("burgers", condition, function(res) {
      //cb(res);
    //});
  //}
};

// export the database functions for the controller (burgers_controller.js).
module.exports = burger;