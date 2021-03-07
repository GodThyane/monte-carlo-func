var express = require('express');
var router = express.Router();
const math = require('mathjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const func = req.body.func
  let vars = {
    x: 10
  }
  const response = {
    func: func,
    result: g(func, vars)
  }
  res.send(response);
});

function g(func, vars){
  return math.evaluate(func, vars)
}

module.exports = router;
