var http = require('https');
var fs = require('fs');

var file = fs.createWriteStream("file.png");
var request = http.get("https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png", function(response) {
  response.pipe(file);
});