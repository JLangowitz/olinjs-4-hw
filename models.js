var UserSchema = mongoose.Schema({
	name: String
});

var User = mongoose.model('User', UserSchema);
exports.User = User;

var TwitSchema = mongoose.Schema({
	customerName: String,
	ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}]
});
var Twit = mongoose.model('Twit', TwitSchema);
exports.Twit = Twit;