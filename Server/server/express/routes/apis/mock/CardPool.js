var express = require('express');
var router = express.Router();

let flags = require('../../__flags__');
let flagCode = flags.flags();

/* GET home page. */
router.get('/all', function(req, res, next) {
  res.send({
    "success": true,
    "flag": flagCode.INFO_UNIVERSAL_SUCCEEDED,
    "cardpools": [
      {
          "poolID": "1",
          "poolName": "Pool A",
          "poolType": "Default",
      },
      {
        "poolID": "2",
        "poolName": "Pool B",
        "poolType": "Default",
      },
      {
        "poolID": "3",
        "poolName": "Pool C",
        "poolType": "Period",
      }
    ],
  });
});

router.get('/cardpool-id/', function(req, res, next) {
  let [
    cardId,
  ] = [
      req.body.cardId,
    ];
  
  res.send({
    "success": true,
    "flag": flagCode.INFO_UNIVERSAL_SUCCEEDED,
    "cardpools": [
      {
          "poolID": "1",
          "poolName": "Pool A",
          "poolType": "Default",
      },
      {
        "poolID": "2",
        "poolName": "Pool B",
        "poolType": "Default",
      },
      {
        "poolID": "3",
        "poolName": "Pool C",
        "poolType": "Period",
      }
    ],
  });
});

router.get('/cardpool-name/', function(req, res, next) {
  let [
    cardName,
  ] = [
      req.body.cardName,
    ];
  
  res.send({
    "success": true,
    "flag": flagCode.INFO_UNIVERSAL_SUCCEEDED,
    "cardpools": [
      {
          "poolID": "1",
          "poolName": "Pool A",
          "poolType": "Default",
      },
      {
        "poolID": "2",
        "poolName": "Pool B",
        "poolType": "Default",
      },
      {
        "poolID": "3",
        "poolName": "Pool C",
        "poolType": "Period",
      }
    ],
  });
});

module.exports = router;