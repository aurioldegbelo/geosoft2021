var express = require('express');
var router = express.Router();

/* GET add page. */
router.get('/', function(req, res, next) {
  res.render('2_add', { title: 'Add Page' });
});

router.post('/newpoi', function(req, res, next) 
{
  console.log("A new poi has been added")
  //res.render('2_add', { title: 'Add Page' });
});


module.exports = router;
