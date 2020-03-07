let express = require('express');
let router = express.Router();

let flags = require('../../__flags__');
let flagCode = flags.flags();

/* GET home page. */
router.post('/login', function(req, res, next) {
  let [
    userName,
    userPwd,
  ] = [
      req.body.userName,
      req.body.userPwd,
    ];

  res.send({
    "success": true,
    "flag": flagCode.INFO_USER_LOGIN_SUCCEEDED,
    "userData": {
      "uuid": "0a3eed30-9ad5-11e9-9835-b8ee6591991d",
      "userName": "Mangzi",
      "userLevel": "user",
    }
  });
});

router.post('/info', function(req, res, next) {
  res.render('index', { title: 'XMDSMDSM Backend' });
});

router.get('/signout', function(req, res, next) {
  res.render('index', { title: 'XMDSMDSM Backend' });
});

module.exports = router;