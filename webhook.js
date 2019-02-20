const secret = process.env.SECRET
const port = process.env.PORT
const repo = "~/site-source/"

const http = require('http')
const crypto = require('crypto')
const exec = require('child_process').exec

http.createServer((req, res) => {
  req.on('data', function (chunk) {
    const sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex')

    if (req.headers['x-hub-signature'] === sig) {
      exec(`sh ${__dirname}/sync.sh`, (error, stdout, stderr) => {
        console.log(`${stdout}`);
        console.log(`${stderr}`);
        if (error !== null) {
          console.log(`exec error: ${error}`);
        }
      });
    }
  });

  res.end();
}).listen(port);