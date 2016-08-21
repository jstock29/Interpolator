var http = require('http');

var port_number = server.listen(process.env.PORT || 3000);
// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/html"});
//   response.write("It's alive!");
//   response.end();
// }).listen(3000);


function sendPage(response, filePath, fileContents) {
  response.writeHead(200, {"Content-Type" : mime.lookup(path.basename(filePath))});
  response.end(fileContents);
}

function send404(response) {
  response.writeHead(404, {"Content-Type" : "text/plain"});
  response.write("Error 404: resource not found");
  response.end();
}

function serverWorking(response, absPath) {
  fs.exists(absPath, function(exists) {
    if (exists) {
      fs.readFile(absPath, function(err, data) {
        if (err) {
          send404(response)
        } else {
          sendPage(response, absPath, data);
        }
      });
    } else {
      send404(response);
    }
  });
}

var server = http.createServer(function(request, response) {
  var filePath = false;

  if (request.url == '/') {
    filePath = "public/index.html";
  } else {
    filePath = "public" + request.url;
  }

  var absPath = "./" + filePath;
  serverWorking(response, absPath);
});
