var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/all', function(req, res, next) {
  res.render('index', { title: 'XMDSMDSM Backend' });
});

router.get('/cardpool-id/', function(req, res, next) {
  res.render('index', { title: 'XMDSMDSM Backend' });
});

router.get('/cardpool-name/', function(req, res, next) {
  res.render('index', { title: 'XMDSMDSM Backend' });
});

module.exports = router;