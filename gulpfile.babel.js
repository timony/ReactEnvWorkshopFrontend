import connect from 'gulp-connect';
import gulp from 'gulp';
import open from 'gulp-open';
import babelify from 'babelify';
import browserify from 'browserify';
import del from 'del';
import source from 'vinyl-source-stream';
import gulpsync from 'gulp-sync';
import inject from 'gulp-inject';
import order from 'gulp-order';
import path from 'path';
import config from './build.config';

const sync = gulpsync(gulp);


gulp.task('clean', () => {
  return del(['dist']);
});

gulp.task('js', () => {
  const options = {
    entries: 'src/App.jsx',   // Entry point
    extensions: ['.js', '.jsx'],            // consider files with these extensions as modules
    debug: true,  // add resource map at the end of the file or not
    paths: ['src/']           // This allows relative imports in require, with './scripts/' as root
  };

  return browserify(options)
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('vendor', () => {
  return gulp
    .src('vendor/*.js')
    .pipe(gulp.dest('dist/vendor'));
});

gulp.task('html', () => {
  const target = gulp.src('src/*.html');
  const sources = gulp.src([
      'dist/css' + '/*.css',
      'dist/js' + '/*.js',
      'dist/vendor/*.js'
    ],
    {read: false}
  );

  const ordering = config.vendor.js.map(filePattern => path.basename(filePattern));
  ordering.unshift('*.css');

  const orderedSource = sources.pipe(order(ordering));

  return target
    .pipe(inject(orderedSource, {
      ignorePath: 'dist',
      addRootSlash: false
    }))
    .pipe(gulp.dest('dist'));

});

gulp.task('transpile', sync.sync(['clean', 'js', 'vendor', 'html']));

gulp.task('start-server', ['transpile'], () => {
  const connectOptions = {
    port: 9000,
    root: './dist'
  };
  connect.server({
    port: connectOptions.port,
    root: connectOptions.root,
    liveReload: true,
    debug: false
  });

  const openOptions = {
    uri: 'http://localhost:' + connectOptions.port
  };

  gulp.src('./dist/index.html')
    .pipe(open(openOptions));

});

gulp.task('default', ['start-server']);

