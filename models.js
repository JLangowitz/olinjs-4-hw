var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	name: String
});

var User = mongoose.model('User', UserSchema);
exports.User = User;

var TwitSchema = mongoose.Schema({
	userName: String,
	twit: String
});
var Twit = mongoose.model('Twit', TwitSchema);
exports.Twit = Twit;