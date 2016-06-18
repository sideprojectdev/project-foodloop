var Yelp = require('yelp');

var yelp = new Yelp({
	consumer_key: '7y4oQGiNy2LJmLws2PmpgA',
	consumer_secret: 'kofl0SYvJ_zqqrE9E9JEffOdQrE',
	token: 'XGnADVk6eVQ5i9XVTNlAdclRkBrai77x',
	token_secret: 'myJUtq6VRKy16NgSCsIJKMCRgKE',
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'Chinese', location: 'Toronto', cll: '43.65939577525231,-79.39831190185855' })
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
