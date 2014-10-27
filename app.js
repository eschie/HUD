var express = require('expres');
var HUD = express();

var multer = require('multer');
var mongo = require('mongodb');
var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb';
var collection;