var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/draw_one_time', function(req, res, next) {
  res.render('index', { title: 'XMDSMDSM Backend' });
});

router.get('/draw_ten_time', function(req, res, next) {
  res.render('index', { title: 'XMDSMDSM Backend' });
});

module.exports = router;