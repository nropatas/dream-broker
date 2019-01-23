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

function processVideo(videoPath) {
  var videoUuid = uuidv1();
  try {
    new ffmpeg(videoPath, function (error, video) {
		if (error) {
			console.log('Error while processing: ' + error);
      return;
		}
    // '/' + videoUuid + '/frames'
    video.fnExtractFrameToJPG('frames', {
			frame_rate : 1,
			file_name : 'frame_%t_%s'
		},
    function (error, frames) {
      if (!error)
				console.log('Frames: ' + frames);
        else {
          console.log(error);
        }
		});

	});
  }
  catch (e) {

  }
};

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/process', upload.single('video'), function(req, res) {
  var path = _.get(req, 'file.path');
  console.log(path);

  // TODO: Process the video
  processVideo(path);

  var output = 'test';
  res.render('output', { output });
})

module.exports = router;
