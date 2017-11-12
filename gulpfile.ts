import * as del from 'del';
import * as gulp from 'gulp';
import * as ts from 'gulp-typescript';
import * as uglify from 'gulp-uglify';
import * as pump from 'pump';

gulp.task('clean:dist', () => del(['./dist/*']));

gulp.task('clean:addon', () => del(['./addon/*']));

gulp.task('clean', ['clean:dist', 'clean:addon']);

gulp.task('manifest', ['clean:dist'], () => {
	return gulp.src('assets/manifest.json').pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean:dist', 'manifest'], cb => {
	pump(
		[
			gulp.src('src/**/*.ts'),
			ts(),
			uglify(),
			gulp.dest('dist')
		],
		cb
	);
});

gulp.task('watch', () => gulp.watch('./src/**/*', ['build']));

gulp.task('default', ['watch']);
