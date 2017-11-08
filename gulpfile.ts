import * as gulp from 'gulp';
import * as ts from 'gulp-typescript';
import * as uglify from 'gulp-uglify';

gulp.task('manifest', () => {
	return gulp.src('assets/manifest.json').pipe(gulp.dest('dist'));
});

gulp.task('build', ['manifest'], () => {
	return gulp.src('src/**/*.ts')
		.pipe(ts())
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
