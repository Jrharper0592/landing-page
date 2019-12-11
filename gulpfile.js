var gulp = require("gulp");
var browserSync = require("browser-sync").create();

function reload() {
    browserSync.reload();
}
 
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./app/css/styles.css', reload);
 
    gulp.watch("index.html", reload);
    
}

exports.watch = watch