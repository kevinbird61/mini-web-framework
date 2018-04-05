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
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

/* redirect & static link */
// for http
app.set('views',path.join(__dirname,'client/views'));
/* For extension
app.use(express.static(path.join(__dirname,'client/elements')));
app.use(express.static(path.join(__dirname,'client/images')));
app.use(express.static(path.join(__dirname,'client/css')));
app.use(express.static(path.join(__dirname,'client/js')));
app.use(express.static(path.join(__dirname,'client/lib')));
*/

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