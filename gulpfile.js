const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function css() {
  return src('src/scss/app.scss', { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('build/css', { sourcemaps: true }))
}

function dev() {
  watch('src/scss/**/*.scss', css)
}

exports.css = css
exports.dev = dev
exports.default = series(css)

