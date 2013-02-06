var models = require('../models')
	,User = models.User
	,Twit = models.Twit;

exports.new = function(req, res){
	var twit = new Twit ({userName:req.session.user.name, twit:req.body.twit});
	twit.save(function(err){
		if (err){
			return console.log("error", err)
		}
		res.send({'done':"sent"});
	});
};