/* library */
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
/* core */
// const { "core" } = require('./server/*');

const app = express();
// using 2 type of render engine (pug/ejs)
app.set('view engine', 'ejs');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

/* redirect & static link */
/* For extension */
app.use(express.static(path.join(__dirname,'public/elements')));
app.use(express.static(path.join(__dirname,'public/images')));
app.use(express.static(path.join(__dirname,'public/css')));
app.use(express.static(path.join(__dirname,'public/js')));
app.use(express.static(path.join(__dirname,'public/lib')));

/* ssl usage
var options = {
    key: fs.readFileSync(path.join('/','var','www','sslforfree','private.key')),
    cert: fs.readFileSync(path.join('/','var','www','sslforfree','certificate.crt'))
}
*/

/* Initialize all module */
/* Need to separate "Secure service" & "Download Service" */
// const secure_server = https.createServer(options,app_s);
const server = http.createServer(app);

/* Both (Secure & Download), often for testbed or introduction */
// core.init(app);

/* 2 Server create! */
server.listen(process.env.npm_package_config_port, function() {
    console.log("Secure Server listening on port " + process.env.npm_package_config_port);
});