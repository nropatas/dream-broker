var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'videos' })
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/process', upload.single('video'), function(req, res) {
  console.log(req.file);
  // TODO: Process the video
  var path = _.get(req, 'file.path');

  var output = 'test';
  res.render('output', { output });
})

module.exports = router;
