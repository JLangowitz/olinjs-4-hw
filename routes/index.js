var models = require('../models')
	,User = models.User
	,Twit = models.Twit;

exports.index = function(req, res){
	var user = req.session.user;
	Twit.find().sort({'_id' : 'descending'}).exec(function(err,data){
		if (err)
			return console.log ('error', err);
		res.render('index', {title: 'Crappy Twitter', twits: data, logged: user});
	});
};

exports.update = function(req, res){
	Twit.find().sort({'_id' : 'descending'}).exec(function(err,data){
		if (err)
			return console.log ('error', err);
		res.render('_twits', {twits: data});
	});
};
