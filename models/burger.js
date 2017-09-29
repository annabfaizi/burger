var orm  = require("../config/orm.js");

var burger = {
	all: function (cb){
		orm.all("burgers", function (res){
			cb(res);
		})
	},
	create: function(name, cb){
		orm.create("burgers", name, function(res){
			cb(res);
		})
	},
	update: function(change, condition, cb){
		orm.update("burgers", change, condition, function(res){
			cb(res);
		})
	},
	delete: function(condition, cb){
		orm.delete("burgers", condition, function(res){
			cb(res);
		})
	}
}

module.exports = burger;