var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');
var ffmpeg = require('ffmpeg');
var uuidv1 = require('uuid/v1');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.engine('handlebars', hbs());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())

app.use('/', indexRouter);

module.exports = app;

/*
var processVideo = function(videoPath) {
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

processVideo("excursion_video.mp4");
*/
