var gulp =    require("gulp");
var concat =  require("gulp-concat");
var include = require("gulp-include");
var rename =  require("gulp-rename");
var uglify =  require("gulp-uglify");

gulp.task("build", function() {
	return gulp.src("source/md5.js")
		// non-minified version
		.pipe(include())
		.pipe(concat("md5.js"))
		.pipe(gulp.dest("dist"))

		// minified version
		.pipe(uglify())
		.pipe(rename({ extname: ".min.js" }))
		.pipe(gulp.dest("dist"));
});
