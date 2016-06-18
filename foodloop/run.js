var coord = {latitude: 43.65860098525407, longitude: -79.39782458347145};
var positionllll = {coords: coord};
var restauranto = searchBasedOnPos(positionllll);
console.log(restauranto);
while (restauranto === undefined) {
	restauranto = searchBasedOnPos(positionllll);
}
console.log(restauranto);
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(restauranto);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

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
	//console.log('----------------------------------------');

	var off = String(Math.round(Math.random() * 500));
	yelp.search({ term: 'restaurant', limit: '1', offset: off,
				bounds: String(lat - 0.01) + ',' + String(logi - 0.01) + '|' +
				String(lat + 0.01) + ',' + String(logi + 0.01)})
	.then(function (data) {
		var a = data.businesses[0].name;
		while (a === undefined) {
			a = data.businesses[0].name;
		}
		console.log('returning');
		return a;
	})
	.catch(function (err) {
		console.error(err);
	});
}
