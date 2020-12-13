var gulp = require('gulp');
var bs = require('browser-sync').create();

//watch task
gulp.task('watch', function () {
    //spin up dev server
    bs.init({
        server: {
            baseDir: "./app/",

        },
        port: 8080
    });

    //when scss files change, run sass task first and reload browserSync second
    gulp.watch('./app/*.html').on('change', function () {
        bs.reload();
    });

});

//call watch task
gulp.task('default', gulp.series('watch'));