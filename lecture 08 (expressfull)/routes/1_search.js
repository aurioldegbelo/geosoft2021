var express = require('express');
var router = express.Router();

/* GET search page. */
router.get('/', function(req, res, next) {
  res.render('1_search', { title: 'Search Page' });
});

module.exports = router;
