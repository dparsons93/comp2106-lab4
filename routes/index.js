var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'David' });
});

router.get('/laura', function(req, res, next) {
  res.render('laura', { name: 'Laura' });
});

router.get('/jim', function(req, res, next) {
  res.render('jim', { name: 'Jim' });
});

module.exports = router;
