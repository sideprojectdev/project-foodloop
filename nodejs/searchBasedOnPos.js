var website = require("./website");

function searchBasedOnPos(position, response) {
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
		/*while (a === undefined) {
			a = data.businesses[0].name;
		}*/
		console.log('returning');
		//console.log(a);
		if(a === undefined){
			website.error(response);
		}
		else{
        	website.result(data, response);
		}
		return a;
	})
	.catch(function (err) {
		console.error(err);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("ERROR");
        response.end();
	});
}

exports.searchBasedOnPos = searchBasedOnPos;