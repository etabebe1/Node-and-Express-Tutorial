var http = require("http");
var fs = require("fs");
/* 
http.createServer( function(req, res) {
    const text = fs.readFileSync('./content/big.txt', 'utf8')
    res.end(text)
}).listen(5000)
 */

// Notice as we make open the text file through our server -- the size 1.7MB
// This file is sent to the use instantly which makes the loading -- too difficult for the user
// However, rather than sending it as whole we can sent it in the form of --- chunk
// Here is how

http
  .createServer(function (req, res) {
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");

    fileStream.on("open", function () {
      fileStream.pipe(res);
    });

    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5001);

// So we can observe the difference of uploading file as a whole and in the form of chunk
// Transfer encoding: chucked appears on Network -=> Header
