var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/ping', function (req, res, next) {
  let result = {
    ping : 'pong'
  }
  res.send(result);
});

module.exports = router;
