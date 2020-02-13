const http = require("http");
const https = require("https");
const url = require("url");
const qs = require("querystring");

const PORT = process.env.PORT || 3000;

http
  .createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var route = q.pathname;

    if (route == "/download") {
      https
        .get(
          `https://www.youtube.com/get_video_info?video_id=${q.query.id}`,
          response => {
            var body = "";
            response.on("data", d => {
              body = body + d;
            });

            response.on("end", function() {
              var mainjson = qs.parse(body);
              var playerResponse = JSON.parse(mainjson.player_response);

              if (playerResponse.playabilityStatus.status == "OK") {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(playerResponse.streamingData));
                return res.end();
              } else {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(playerResponse));
                return res.end();
              }
            });
          }
        )
        .on("error", e => {
          console.log(e);
        });
    } else if (route == "/candownload") {
      https
        .get(
          `https://www.youtube.com/get_video_info?video_id=${q.query.id}`,
          response => {
            var body = "";
            response.on("data", d => {
              body = body + d;
            });

            response.on("end", function() {
              var mainjson = qs.parse(body);
              var playerResponse = JSON.parse(mainjson.player_response);
              if (playerResponse.playabilityStatus.status == "OK") {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.write("OK");
                return res.end();
              } else {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.write("UNPLAYABLE");
                return res.end();
              }
            });
          }
        )
        .on("error", e => {
          console.log(e);
        });
    } else if (route == "/details") {
      https
        .get(
          `https://www.youtube.com/get_video_info?video_id=${q.query.id}`,
          response => {
            var body = "";
            response.on("data", d => {
              body = body + d;
            });

            response.on("end", function() {
              var mainjson = qs.parse(body);
              var playerResponse = JSON.parse(mainjson.player_response);

              res.writeHead(200, { "Content-Type": "application/json" });
              res.write(JSON.stringify(playerResponse.videoDetails));
              return res.end();
            });
          }
        )
        .on("error", e => {
          console.log(e);
        });
    }
  })
  .listen(PORT);
