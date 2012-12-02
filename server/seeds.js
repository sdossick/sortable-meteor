Meteor.startup(function () {
	if (Items.find().count() == 0) {
		var seeds = [ { name: "Foo",
										tagline: "Bar",
										listposition: 0 },
									{ name: "Bing",
										tagline: "Bong",
										listposition: 1 },
									{ name: "Tick",
										tagline: "Tock",
										listposition: 2 } ];
		_.each(seeds, function(item) {
			Items.insert(item);
		});
	}
});