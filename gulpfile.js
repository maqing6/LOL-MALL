const gulp = require("gulp");

//处理静态文件 html代码压缩处理
const htmlmin = require("gulp-htmlmin");
gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})

gulp.task("ohtml",function(){
    return gulp.src("html/*.html")
    .pipe(gulp.dest("dist/html/"))
    .pipe(connect.reload());

})

// gulp.task("rcss",function(){
//     return gulp.src("./stylesheet/*.css")
//     .pipe(gulp.dest("dist/css"))
//     .pipe(connect.reload());
// })

gulp.task("images",function(){
    return gulp.src("indeximg/*.{jpg,png,ico}")
    .pipe(gulp.dest("dist/index/images"))
    .pipe(connect.reload());
})

// gulp.task("data",function(){
//     return gulp.src([""])
//     .pipe(gulp.dest(""))
//     .pipe(connect.reload());
// })

//处理js代码
gulp.task("scripts",function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

//处理json数据
gulp.task("jsons",function(){
    return gulp.src("*.json")
    .pipe(gulp.dest("dist/json/"))
    .pipe(connert.reload());
})

//处理scss https://www.npmjs.com/package/gulp-sass
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

gulp.task("scss",function(){
    return gulp.src("./stylesheet/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(function (path) {
        path.basename += ".min"
      }))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

//执行以上所有任务代码(没加data)
gulp.task("build",["copy-html", "images",  "scripts", 'scss','ohtml','jsons'],function(){
    console.log("项目建立成功");
})

//启动监听
gulp.task("watch",function(){
    gulp.watch("*.html", ['copy-html']);
    gulp.watch("*.{jpg,png,ico}", ['images']);
//   gulp.watch(["*.json", "!package.json"], ['data']);
    gulp.watch(["*.js", "!gulpfile.js"], ['scripts']);
    gulp.watch("./stylesheet/*.scss", ['scss']);
    gulp.watch("./stylesheet/*.css", ['rcss']);
    gulp.watch("./html/*.html",['ohtml']);
    gulp.watch("*.json",['jsons']);

})

//启动服务器
const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:8889,
        livereload:true
    })
})

//创建默认的任务
gulp.task("default",['watch','server']);