//grab the gulp packages
var gulp = require('gulp');
var gutil = require('gulp-util');

//create a task and run it
gulp.task('dolog', function(){
  return gutil.log("the gulp is already running!!");
});
