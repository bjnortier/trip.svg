'use strict';

const gulp = require('gulp');
const path = require('path');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const jscsStylish = require('gulp-jscs-stylish');

const srcFiles = path.join('lib', '**', '*.js');
const functionalTestFiles = path.join('test', 'functional', 'src', '*.js');

// ----- Individual Tasks -----

gulp.task('clearconsole', () => {
  process.stdout.write('\x1Bc');
});

gulp.task('jshint', () => {
  return gulp.src([srcFiles, functionalTestFiles])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('jscs', () => {
  return gulp.src([srcFiles])
    .pipe(jscs())
    .pipe(jscsStylish());
});

gulp.task('test', ['jshint', 'jscs']);

gulp.task('default', ['test']);

gulp.task('watch', () => {
  gulp.watch(srcFiles, ['clearconsole', 'jshint', 'jscs', 'unit']);
  gulp.watch(functionalTestFiles, ['clearconsole', 'jshint', 'jscs']);
});
