/// <reference path="./types/pkg.d.ts" />

import * as del from 'del';
import * as gulp from 'gulp';
import * as plumber from 'gulp-plumber';
import * as replace from 'gulp-replace';
import * as pump from 'pump';
import * as webpack from 'webpack-stream';

import * as pkg from './package.json';
import config from './webpack.config';

gulp.task('clean:dist', () => del(['./dist/*']));

gulp.task('clean:addon', () => del(['./addon/*']));

gulp.task('clean', ['clean:dist', 'clean:addon']);

gulp.task('manifest', ['clean:dist'], cb => {
	pump(
		[
			gulp.src('assets/manifest.json'),
			plumber(),
			replace('%version%', pkg.version),
			gulp.dest('dist')
		],
		cb
	);
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
