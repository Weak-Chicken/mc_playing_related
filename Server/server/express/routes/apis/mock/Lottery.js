var express = require('express');
var router = express.Router();

let flags = require('../../__flags__');
let flagCode = flags.flags();

/* GET home page. */
router.get('/draw_one_time', function(req, res, next) {
  res.send({
    "success": true,
    "flag": flagCode.INFO_UNIVERSAL_SUCCEEDED,
    "cards": {
      "itemID": "item's id",
      "itemName": "item's name",
      "itemLevel": 10,
    },
  });
});

router.get('/draw_ten_time', function(req, res, next) {
  res.send({
    "success": true,
    "flag": flagCode.INFO_UNIVERSAL_SUCCEEDED,
    "cards": [
      {
        "itemID": "item's id",
        "itemName": "item's name",
        "itemLevel": 1,
      },
      {
        "itemID": "item's id",
        "itemName": "item's name",
        "itemLevel": 2,
      },
      {
        "itemID": "item's id",
        "itemName": "item's name",
        "itemLevel": 3,
      },
      {
        "itemID": "item's id",
        "itemName": "item's name",
        "itemLevel": 4,
      },
      {
        "itemID": "item's id",
        "itemName": "item's name",
        "itemLevel": 5,
      },
      {
        "itemID": "item's id",
        "itemName": "item's name",
        "itemLevel": 6,
      },
      {
        "itemID": "item's id",
        "itemName": "item's name",
        "itemLevel": 7,
      },
      {
        "itemID": "item's id",
        "itemName": "item's name",
        "itemLevel": 8,
      },
      {
        "itemID": "item's id",
        "itemName": "item's name",
        "itemLevel": 9,
      },
      {
        "itemID": "item's id",
        "itemName": "item's name",
        "itemLevel": 10,
      },
    ],
  });
});

module.exports = router;