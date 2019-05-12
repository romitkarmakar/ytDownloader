const fs = require('fs');
const ytdl = require('ytdl-core');
const express = require('express');
  const app = express();

  app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});

  app.get('/download', (req,res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, {
        format: 'mp4'
        }).pipe(res);
    });