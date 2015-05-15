var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/fight', function(req, res, next) {
  var kitties = req.body.contenders;
  console.log(kitties)
  var index = Math.floor(Math.random()*kitties.length);
  var winner = kitties[index]
  res.end(winner)
});

module.exports = router;
