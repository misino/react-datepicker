gulp = require 'gulp'

GulpEste = require 'gulp-este'
runSequence = require 'run-sequence'

este = new GulpEste __dirname, true, '../../../..'

paths =
  stylus: [
    'src/css/datepicker.styl'
  ]
  coffee: [
    'bower_components/este-library/este/**/*.coffee'
    'src/**/*.coffee'
  ]
  jsx: [
    'src/**/*.jsx'
  ]
  js: [
    'bower_components/closure-library/**/*.js'
    'bower_components/este-library/este/**/*.js'
    'src/**/*.js'
    'tmp/**/*.js'
    '!**/build/**'
  ]
  compiler: 'bower_components/closure-compiler/compiler.jar'
  externs: [
    'bower_components/react-externs/externs.js'
  ]
  thirdParty:
    development: [
#      'bower_components/react/react.js'
    ]
    production: [
#      'bower_components/react/react.min.js'
    ]

dirs =
  googBaseJs: 'bower_components/closure-library/closure/goog'
  watch: ['src']

gulp.task 'stylus', ->
  este.stylus paths.stylus

gulp.task 'coffee', ->
  este.coffee paths.coffee

gulp.task 'jsx', ->
  este.jsx paths.jsx

gulp.task 'transpile', (done) ->
  runSequence 'stylus', 'coffee', 'jsx', done

gulp.task 'deps', ->
  este.deps paths.js

gulp.task 'concat-deps', ->
  este.concatDeps()

gulp.task 'compile-datepicker', ->
  este.compile paths.js, 'src/build',
    fileName: 'datepicker.min.js'
    compilerPath: paths.compiler
    compilerFlags:
      closure_entry_point: 'misino.ui.datepicker.DatePickerInput'
      externs: paths.externs
      warning_level: 'VERBOSE'

gulp.task 'concat-all', ->
  este.concatAll
    'src/build/react-datepicker-thirdparty.js': paths.thirdParty


gulp.task 'js', (done) ->
  runSequence [
    'deps' if este.shouldCreateDeps()
    'concat-deps'
    'compile-datepicker'
    'concat-all'
    done
  ].filter((task) -> task)...

gulp.task 'build', (done) ->
  runSequence 'transpile', 'js', done

gulp.task 'watch', ->
  este.watch dirs.watch,
    coffee: 'coffee'
    js: 'js'
    jsx: 'jsx'
    styl: 'stylus'
  , (task) -> gulp.start task

gulp.task 'run', (done) ->
  runSequence [
    'watch'
    done
  ].filter((task) -> task)...

gulp.task 'default', (done) ->
  runSequence 'build', 'run', done