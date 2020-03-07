var express = require('express');
var router = express.Router();

let flags = require('../../__flags__');
let flagCode = flags.flags();

/* GET home page. */
router.get('/all', function(req, res, next) {
  res.send({
    "success": true,
    "flag": flagCode.INFO_UNIVERSAL_SUCCEEDED,
    "cards": [
      {
          "itemID": "313:85",
          "itemName": "item A",
          "itemLevel": 1,
      },
      {
        "itemID": "137",
        "itemName": "item B",
        "itemLevel": 3,
      },
      {
        "itemID": "34532:233",
        "itemName": "item C",
        "itemLevel": 5,
      },
    ],
  });
});

router.get('/card-id/', function(req, res, next) {
  let [
    cardId,
  ] = [
      req.body.cardId,
    ];
  
  res.send({
    "success": true,
    "flag": flagCode.INFO_UNIVERSAL_SUCCEEDED,
    "cards": [
      {
          "itemID": "313:85",
          "itemName": "item A",
          "itemLevel": 1,
      },
      {
        "itemID": "137",
        "itemName": "item B",
        "itemLevel": 3,
      },
      {
        "itemID": "34532:233",
        "itemName": "item C",
        "itemLevel": 5,
      },
    ],
  });
});

router.get('/card-name/', function(req, res, next) {
  let [
    cardName,
  ] = [
      req.body.cardName,
    ];
  
  res.send({
    "success": true,
    "flag": flagCode.INFO_UNIVERSAL_SUCCEEDED,
    "cards": [
      {
          "itemID": "313:85",
          "itemName": "item A",
          "itemLevel": 1,
      },
      {
        "itemID": "137",
        "itemName": "item B",
        "itemLevel": 3,
      },
      {
        "itemID": "34532:233",
        "itemName": "item C",
        "itemLevel": 5,
      },
    ],
  });
});

module.exports = router;