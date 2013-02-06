var models = require('../models')
	,User = models.User
	,Twit = models.Twit;

exports.index = function(req, res){
	findTwits().exec(function(err,data){
		if (err)
			return console.log ('error', err);
		res.render('index', {title: 'Crappy Twitter', twits: data});
	});
};

exports.update = function(req, res){
	findTwits().exec(function(err,data){
		if (err)
			return console.log ('error', err);
		res.render('_twits', {twits: data});
	});
};

function findTwits(){
	return Twit.find().sort({'_id' : 'descending'});
}