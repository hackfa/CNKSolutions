const gulp = require('gulp');
const obt = require('origami-build-tools');

gulp.task('build', function() {
	return obt.build(gulp, {
		js: './cnksolution/js/main.js',
		sass: './cnksolution/scss/main.scss',
		buildJs: 'bundle.js',
		buildCss: 'bundle.css',
		buildFolder: 'public'
	});
});

gulp.task('verify', function() {
	return obt.verify(gulp);
});

gulp.task('watch', function() {
	gulp.watch('./cnksolution/**/*', ['build']);
});

gulp.task('default', ['verify', 'build']);