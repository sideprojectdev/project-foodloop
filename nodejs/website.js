function init(response){
    response.writeHead(200, {"Content-Type": "text/html"});
    var html = '<!DOCTYPE html><html><head><title>My Title</title></head><body>';
    html += '<p> Welcome to foodloop 0.0.1 beta!</p>';
    html += '<a href=http://localhost:3000/result>default position</a>';
    html += '<p></p>';
    html += '<a href=http://localhost:3000/posNow>geolocation</a>';
    html += '<p></p>';
    html += '</body></html>';
    response.write(html);
    response.end();
}
function result(word, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    var html = '<!DOCTYPE html><html><head><title>My Title</title></head><body>';
    html += '<p>' + word + '</p>';
    html += '<p> Back to <a href=http://localhost:3000>Home Page</a></p>';
    html += '</body></html>';
    response.write(html);
    response.end();
}

exports.init = init;
exports.result = result;