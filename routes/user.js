var models = require('../models')
	,User = models.User;
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.new = function(req, res){
	res.render('userForm',{title:'New User'});
};

exports.create = function(req, res){
	User.find({name:req.body.name}).exec(function(err, db_user)){
		if (db_user.length != 0){
			var newUser = new User ({name:req.body.name});
			newUser.save(function(err){
				if (err){
					return console.log("error", err)
				}
				res.redirect('/');
			});
		}
	});
});