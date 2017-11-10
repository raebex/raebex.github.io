var FroggiApp = window.FroggiApp || {};

FroggiApp.FroggiCollection = Backbone.Collection.extend({
	//tell the collection what model to use
	model: FroggiApp.FroggiModel,

	//specify local storage instead of api url
	localStorage: new Backbone.LocalStorage('froggi-app'), 
	//give local storage instance a name

});

//create instance of our Collection
FroggiApp.Favs = new FroggiApp.FroggiCollection();