var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/process', function(req, res) {
  // TODO: Process the video

  var output = 'test';
  res.render('output', { output });
})

module.exports = router;
