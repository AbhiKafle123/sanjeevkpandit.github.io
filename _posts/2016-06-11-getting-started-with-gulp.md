---
layout:     post
title:      Getting started with gulp
date:       2016-06-11
summary:    Learn basics of gulp.
categories: basics gulp start setup learn
---

<a href="http://gulpjs.com/" target="_blank">Gulp</a> is an automated tool that helps to enhance workflow.

### Why gulp?

- Simple
- Automation of tasks
- Platform independent
- Plugins available in large number

### Getting started

#### Installation Instructions

- <a href="http://npmjs.com/" target="_blank">Npm</a> needs to be installed in order to install <a href="http://gulpjs.com/" target="_blank">gulp</a>. Please find the installation instructions <a href="{{site.baseurl}}/install/npm/linux/ubuntu/windows/setup/2016/06/10/install-npm/" target="_blank">here</a>.

- Remove gulp (if installed before)

{% highlight bash %}
$ npm rm --global gulp
{% endhighlight %}

- Install gulp

{% highlight bash %}
# Globally
npm install --global gulp-cli

# Within a project
npm install gulp --save-dev
{% endhighlight %}

#### Implementation in a project

- Create a file `gulpfile.js` in project's root folder and add following contents in it.

{% highlight js %}
var gulp = require('gulp');

gulp.task('default', function(){
    // default task
});
{% endhighlight %}

- Run gulp. This will run the default task as defined above.

{% highlight bash %}
gulp
{% endhighlight %}

- For a specific task

{% highlight js %}
gulp.task('test', function() {
    console.log('This is a test task');
});
{% endhighlight %}
{% highlight bash %}
# gulp <task_name>
gulp test
{% endhighlight %}

#### Sample `gulpfile.js`.

{% highlight js %}
var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var notify = require('gulp-notify');
var minify = require('gulp-minify');
var concat = require('gulp-concat');

var SCSS_FILES = 'src/sass/**/*.scss';
var JS_FILES = 'src/js/**/*.js';
var ES6_FILES = 'src/js/es6/**/*.js';

var errorHandler = function(error) {
    notify.onError({
        title: 'Task Failed [' + error.plugin + ']',
        message: 'Oops! Something went north!',
        sound: true
    })(error);

    // Prevent gulp watch from stopping
    this.emit('end');
};

gulp.task('sass', function() {
    // Convert sass to css
    return gulp.src(SCSS_FILES)
        .pipe(sass())
        .on('error', errorHandler)
        .pipe(gulp.dest('public/css/'))
        .pipe(notify({
            message: "SCSS completed"
        }));
});

gulp.task('concat-css', function() {
    // Concat css files to a single file
    return gulp.src(SCSS_FILES)
        .pipe(sass())
        .pipe(concat('compiled.scss'))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('concat-js', function() {
    // Concat js files to a single file
    return gulp.src(JS_FILES)
        .pipe(concat('compiled.js'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('es6', function() {
    // Transpile ES6 into JavaScript(ES5)
    return gulp.src(ES6_FILES)
        .pipe(babel())
        .on('error', errorHandler)
        .pipe(gulp.dest('public/js/'))
        .pipe(notify({
            message: "ES6 Compiled"
        }));
});

gulp.task('minify-js', function() {
    // Minify js files
    return gulp.src(JS_FILES)
        .pipe(concat('compiled.js'))
        .pipe(minify())
        .pipe(gulp.dest('public/js/'));
});

// Default task
gulp.task('default', ['sass', 'es6']);

// Watch files for any change
gulp.task('watch', function() {
    gulp.watch(SCSS_FILES, ['sass']);
    gulp.watch(ES6_FILES, ['es6']);
});
{% endhighlight %}

Download above gulpfile from <a href="https://gist.github.com/sanjeevkpandit/38e690d8c1625ee1486fa13e3d554700" target="_blank">here</a>.

#### Resources
* <a href="http://gulpjs.com/" target="_blank">http://gulpjs.com/</a>
* <a href="https://github.com/sanjeevkpandit/gulp-step-by-step" target="_blank">https://github.com/sanjeevkpandit/gulp-step-by-step</a>