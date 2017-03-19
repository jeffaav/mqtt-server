'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('./src/tsconfig.json');

gulp.task('server', () => {
    let tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('./dist'));
})