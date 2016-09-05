function init(response){
    response.writeHead(200, {"Content-Type": "text/html"});
    var html = '<!DOCTYPE html><html><head><title>My Title</title></head><body>';
    html += '<p> Welcome to foodloop 0.0.2 beta!</p>';
    html += '<a href=http://localhost:3000/default>default position</a>';
    html += '<p></p>';
    html += '<a href=http://localhost:3000/posNow>geolocation</a>';
    html += '<p></p>';
    html += '</body></html>';
    response.write(html);
    response.end();
}
function result(data, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    var html = '<!DOCTYPE html><html><head><style>#map{width: 100%; height: 400px;}</style></head><body><div id="map"></div><script>';
    html += "function initMap(){var mapDiv=document.getElementById('map');var map = new google.maps.Map(mapDiv, {center:{lat:"
    + data.businesses[0].location.coordinate.latitude + ", lng: " + data.businesses[0].location.coordinate.longitude
    +"}, zoom:20});}</script>";
    html += '<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkak3oeJ5I5p9-5GEVZ6YsXs78angDdbw&callback=initMap"></script>';
    html += '<p>' + data.businesses[0].name + '</p>';
    html += '<p> Back to <a href=http://localhost:3000>Home Page</a></p>';
    html += '</body></html>';
    response.write(html);
    response.end();
}
function error(response){
    response.writeHead(200, {"Content-Type": "text/html"});
    var html = '<!DOCTYPE html><html><head></head><body>';
    html += '<h3>Geolocation Failed</h3>';
    html += '<p> Back to <a href=http://localhost:3000>Home Page</a></p>';
    html += '</body></html>';
    response.write(html);
    response.end();
}
//what happened if the address returns no restaurant?

exports.init = init;
exports.result = result;
exports.error = error;