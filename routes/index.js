var express = require('express');
var router = express.Router();
var multer  = require('multer')
var _ = require('lodash');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'videos');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

var upload = multer({ storage });

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/process', upload.single('video'), function(req, res) {
  var path = _.get(req, 'file.path');
  console.log(path);

  // TODO: Process the video

  var output = 'test';
  res.render('output', { output });
})

module.exports = router;
