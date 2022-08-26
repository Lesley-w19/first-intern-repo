// grab all the gulp packages
var gulp = require("gulp"),
  gutil = require("gulp-util");

// create a task
gulp.task("create", async function () {
  return gutil.log("the create log function is running");
});

// create a default task and just log a message
gulp.task("default", async function () {
  return gutil.log("Gulp is running!");
});

const { src, dest, task } = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

exports.default = function () {
  return src("src/*.js")
    .pipe(babel())
    .pipe(src("vendor/*.js"))
    .pipe(dest("output/"))
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest("output/"));
};

// test sass file.

// include gulp series

var karmaserver = require("karma").Server;
task("testKarma", function (done) {
  new karmaserver(
    {
      config: __dirname + "/karma.conf.js",
    },
    done
  ).start();
});
// exports.test = karmaserver
