import gulp from 'gulp';
import coffee from 'gulp-coffee';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';

gulp.task('coffee', () => {
	console.log('gulp task coffee');

	gulp.src('one.coffee')
		.pipe(coffee())
		.pipe(uglify())
		.pipe(gulp.dest('build'))
})

gulp.task('images', () => {
	console.log('gulp task images');

	gulp.src('*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('build/image'))
})

gulp.task('watch', () => {
	gulp.watch('one.coffee', ['coffee'])
})

gulp.task('default', ['coffee', 'images', 'watch'])


