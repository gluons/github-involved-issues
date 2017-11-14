import * as del from 'del';
import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import * as pump from 'pump';
import * as webpack from 'webpack-stream';

import config from './webpack.config';

gulp.task('clean:dist', () => del(['./dist/*']));

gulp.task('clean:addon', () => del(['./addon/*']));

gulp.task('clean', ['clean:dist', 'clean:addon']);

gulp.task('manifest', ['clean:dist'], () => {
	return gulp.src('assets/manifest.json').pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean:dist', 'manifest'], cb => {
	pump(
		[
			gulp.src(['src/**/*.ts', '!src/**/*.d.ts']),
			plumber(),
			webpack(config),
			gulp.dest('dist')
		],
		cb
	);
});

gulp.task('watch', ['build'], () => gulp.watch(['src/**/*', 'assets/**/*'], ['build']));

gulp.task('default', ['watch']);
