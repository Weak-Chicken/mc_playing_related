let express = require('express');
let router = express.Router();

let flags = require('../../__flags__');
let flagCode = flags.flags();

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
      "userName": userName,
      "userLevel": "user",
    }
  });
});

router.post('/info', function(req, res, next) {
  let [
    userUUID,
  ] = [
      req.body.userUUID,
    ];

  if ("0a3eed30-9ad5-11e9-9835-b8ee6591991d".length === userUUID.length) {
    res.send({
      "success": true,
      "flag": flagCode.INFO_UNIVERSAL_SUCCEEDED,
      "userData": {
        "userMoney": 233.33,
        "userInventory": [
            {
                "itemID": "313:85",
                "itemName": "item A",
                "itemLevel": 1,
                "ExchangingStatus": false,
                "ExchangedTime": "",
            },
            {
              "itemID": "137",
              "itemName": "item B",
              "itemLevel": 3,
              "ExchangingStatus": true,
              "ExchangedTime": "2018-12-12T12:19:13.603Z",
            },
            {
              "itemID": "34532:233",
              "itemName": "item C",
              "itemLevel": 5,
              "ExchangingStatus": false,
              "ExchangedTime": "",
            },
          ],
        "userAvatar": "http://134.209.104.6:3000/mock/User/avatar/test.png"
      }
    });
  } else {
    res.status(400);
    res.send({
      "success": false,
      "flag": flagCode.ERROR_UNIVERSAL_FAILED,
    });
  }
});

router.get('/signout', function(req, res, next) {
  res.send({
    "success": true,
    "flag": flagCode.INFO_UNIVERSAL_SUCCEEDED,
  });
});

module.exports = router;