var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'nodejieke'
});

/* GET home page. */
router.get('/index', function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*")
  connection.query('SELECT * FROM gal',function(err, rows, fields) {
	  	res.send(rows)
	  });
});

router.post('/list', function(req, res, next) {
	var id=req.body.id;
  res.header("Access-Control-Allow-Origin","*")
  connection.query(`SELECT * FROM gal WHERE id=${id}`,function(err, rows, fields) {
	  	res.send(rows)
	  });
});


router.get('/about', function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*")
  connection.query('SELECT * FROM about',function(err, rows, fields) {
	  	res.send(rows)
	  });
});

router.get('/zk', function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*")
  connection.query('SELECT * FROM zk',function(err, rows, fields) {
	  	res.send(rows)
	  });
});

router.post('/detail', function(req, res, next) {
	var id=req.body.id;
	res.header("Access-Control-Allow-Origin","*")
  connection.query(`SELECT * FROM zk WHERE id=${id}`,function(err, rows, fields) {
	  	res.send(rows)
	  });
});





module.exports = router;
