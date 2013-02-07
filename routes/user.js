var models = require('../models')
	,User = models.User;
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.new = function(req, res){
	res.render('userForm',{title:'Login!'});
};

exports.create = function(req, res){
	User.findOne({name:req.body.name}).exec(function(err, user){
		if (!user){
			var user = new User ({name:req.body.name});
			user.save(function(err){
				if (err){
					return console.log("error", err)
				}
			});
		}
		req.session.user = user;
		res.redirect('/');
	});
};