var express = require("express"),
  http = require("http"),
  app = express();

  app.get("/", function (req, res) {
      res.sendfile('./hello.html');
  });

  var inspireArr = ["The answer to life the universe and everthing is 42",
     "Quick brown fox jumped over the lazy dog"];

  app.get("/inspiration", function (req, res) {
      var randReturn = Math.floor(Math.random()*inspireArr.length);
      res.send(inspireArr[randReturn]);
  });

  function JokeObj (s1, p1) {
      this.setup = s1;
      this.punchline = p1;
  }
  var jokeArr = [new JokeObj("abc ?", "xyz"),
    new JokeObj("mno ?", "def"),
    new JokeObj("pqr ?", "uvw") ];

  app.get("/joke", function (req, res) {
      var randReturn = Math.floor(Math.random()*jokeArr.length);
      res.json(jokeArr[randReturn]);
  });

  console.log("server starting. available at http://localhost:3000");
  http.createServer(app).listen(process.env.PORT || 3000);
  //app.listen(3000);

