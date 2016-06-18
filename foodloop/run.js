var coord = {latitude: 43.65860098525407, longitude: -79.39782458347145};
var positionllll = {coords: coord};
searchBasedOnPos(positionllll);

function searchBasedOnPos(position) {

	var lat = position.coords.latitude;
	var logi = position.coords.longitude;

	var Yelp = require('yelp');

	var yelp = new Yelp({
		consumer_key: '7y4oQGiNy2LJmLws2PmpgA',
		consumer_secret: 'kofl0SYvJ_zqqrE9E9JEffOdQrE',
		token: 'XGnADVk6eVQ5i9XVTNlAdclRkBrai77x',
		token_secret: 'myJUtq6VRKy16NgSCsIJKMCRgKE',
	});

	// See http://www.yelp.com/developers/documentation/v2/search_api
	var off = String(Math.round(Math.random() * 500));
	yelp.search({ term: 'restaurant', limit: '1', offset: off,
				bounds: String(lat - 0.01) + ',' + String(logi - 0.01) + '|' +
				String(lat + 0.01) + ',' + String(logi + 0.01)})
	.then(function (data) {
		var len = data.businesses.length
		for(var i = 0; i < len; i++) {
			console.log(data.businesses[i].name);
		}
		console.log('----------------------------------------');
	})
	.catch(function (err) {
		console.error(err);
	});
}
