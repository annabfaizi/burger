var orm  = require("../config/orm.js");

var burger = {
	selectAll: function (cb){
		orm.selectAll("burgers", function (res){
			cb(res);
		})
	},
	createOne: function(name , cb){
		orm.createOne("burgers", name, function(res){
			cb(res);
		})
	},
	updateOne: function(change, condition, cb){
		orm.updateOne("burgers", change, condition, function(res){
			cb(res);
		})
	}
}

module.exports = burger;