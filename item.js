Items = new Meteor.Collection("items");

Items.allow({
	insert: function(userId, item) {
		return true; 
	},
	update: function(userId, items, fields, modifier) {
		return true;			
	},
	remove: function(userId, items) {
		return true;
	}
});
