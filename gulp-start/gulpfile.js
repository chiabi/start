// var gulp = require('gulp');

/**
 * --------------------------------
 * STEP1. hello world 라고 콘솔에 찍는 task
 * gulp.task 메서드 : 새로운 gulp의 task를 등록해주는 역할 (name, [선 실행 할 task], function) 
 * 실행 : $ gulp hello 
 * --------------------------------
 */
// gulp.task('hello', function(){
// 	return console.log('Hello World');
// });

/**
 * --------------------------------
 * STEP2. Default Task
 * 기본값 설정
 * 실행 : $ gulp
 * --------------------------------
 */
// gulp.task('default', ['hello']);

/**
 * --------------------------------
 * STEP2. Series Tasks
 * gulp는 task들을 동시에 병렬로 수행하는데 선 수행이 필요한 task간의 dependency 문제도 지원한다
 * 실행 : $ gulp
 * --------------------------------
 */
// gulp.task('hello', function(){
// 	console.log('Hello');
// });
// // 'hello' task가 먼저 실행 된 후 실행 됨
// gulp.task('world', ['hello'], function(){
// 	console.log('World!');
// });
// gulp.task('default', ['world']);

/**
 * --------------------------------
 * STEP 4. JavaScript Minify(Uglify)
 * gulp-uglify : Minify JavaScript with UglifyJS2. (https://github.com/terinjokes/gulp-uglify)
 * $ npm install gulp-uglify --save-dev
 * --------------------------------
 */
// var gulp = require('gulp');
// var uglify = require('gulp-uglify');
// var minifycss = require('gulp-clean-css');
// var concat = require('gulp-concat');

// gulp.task('uglify', function () {
//     return gulp.src('src/*.js') //src 폴더 아래의 모든 js 파일을
//         .pipe(uglify()) //minify 해서
//         .pipe(gulp.dest('dist')); //dist 폴더에 저장
// });

// gulp.task('default', ['uglify']);

/**
 * gulp.src : 해당 task의 대상이 되는 파일들을 지정, 선택하는 방식은 node-glob 문법을 따름 (https://github.com/isaacs/node-glob/)
 * gulp.dest : 해당 task의 결과물이 저장될 경로를 지정
 * pipe : gulp.src 에서 대상으로 지정된 각 파일들을  stream 형태로 읽어들여 다음으로 거쳐야할 플러그인 등으로 연결할 때 사용
 * --------------------------------
 */

/**
 * --------------------------------
 * STEP 5. Watch
 * gulp.watch 메서드 : 파일에 변경이 있을때마다 변경을 감지해서 task를 실행
 * 배열 형태로 여러개의 task 명을 넣어주면 변경이 일어날 때마다 해당 task들을 자동으로 실행
 * --------------------------------
 */

// gulp.task('watch', function () {
//     gulp.watch('src/js/*.js', ['uglify']);
// });

// gulp.task('default', ['uglify', 'watch']);

/**
 * --------------------------------
 * STEP 6. 파일병합
 * gulp-concat :(https://github.com/contra/gulp-concat)
 * - gulp-sourcemaps 플러그인과도 함께 사용할 수 있기 때문에 상당히 유용하게 사용할 수 있는 플러그인
 * --------------------------------
 */
// gulp.task('uglify', function () {
//     return gulp.src('src/js/*.js') //src 폴더 아래의 모든 js 파일을
//     	.pipe(concat('main.js')) // main.js 라는 파일명으로 모두 병합한 뒤
//         .pipe(uglify()) //minify 해서
//         .pipe(gulp.dest('dist/js')); //dist 폴더에 저장
// });

/**
 * --------------------------------
 * STEP 7. CSS Minify
 * gulp-clean-css : gulp plugin to minify CSS, using clean-css (https://github.com/scniro/gulp-clean-css)
 * 파일 간 중복되는 부분은 적절하게 css 해석 방식을 따라 최적화 함
 * --------------------------------
 */
// gulp.task('minifycss', function(){
// 	return gulp.src('src/css/main.css') // css 폴더의 main.css 파일을
// 		.pipe(minifycss()) // 포함되어 있는 @import를 분석해서 하나의 파일로 병합하고 minify 해서
// 		.pipe(gulp.dest('dist/css')); //dist 폴더에 저장

// });

// gulp.task('watch', function () {
// 	gulp.watch('src/css/*.css', ['minifycss']);
//     gulp.watch('src/js/*.js', ['uglify']);
// });

// gulp.task('default', ['uglify', 'minifycss', 'watch']);

/**
 * --------------------------------
 * STEP 8. BrowerSync로 미니 서버를 띄워서 작업하기
 * BrowerSync : (https://browsersync.io/docs)
 * - Gulp 플러그인이 아닌 Node.js 기반의 어플리케이션이지만 Gulp 와 매끄럽게 연동해서 사용
 * - Gulp 와 매끄럽게 연동해서 사용 가능
 * - 자체적으로 다양한 옵션을 가진 미니 웹서버 기능을 지원
 * - 파일 변경시에 이를 자동으로 감지해서 브라우저 리프레시를 수행
 * - 브라우저들간에 동작을 Sync
 * gulp-htmlmin (https://github.com/jonschlinkert/gulp-htmlmin)
 * --------------------------------
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-clean-css');
var minifyhtml = require('gulp-htmlmin');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create(); // BrowserSync 는 create 메서드로 생성을 먼저 해주어야 하기 때문에 create 메서드를 호출
var reload = browserSync.reload;

// dist 폴더를 기준으로 웹서버 실행
gulp.task('server', ['uglify', 'minifycss', 'minifyhtml'], function(){
	return browserSync.init({
		server: {
			baseDir: './dist' // dist 폴더를 기준으로 BrowserSync 의 웹서버 옵션을 활성화해서 초기화 (https://browsersync.io/docs/options/)
		}
	});
});

gulp.task('minifyhtml', function () {
    return gulp.src('src/**/*.html') //src 폴더 아래의 모든 html 파일을
        .pipe(minifyhtml()) //minify 해서
        .pipe(gulp.dest('dist')) //dist 폴더에 저장
        .pipe(reload({stream:true})); // borwserSync 로 브라우저에 반영
});

gulp.task('uglify', function () {
    return gulp.src('src/**/*.js') //src 폴더 아래의 모든 js 파일을
    	.pipe(sourcemaps.init({loadMaps: true, debug: true})) //소스맵 생성 준비
    	.pipe(concat('main.js')) // main.js 라는 파일명으로 모두 병합한 뒤
        .pipe(uglify()) //minify 해서
        .pipe(sourcemaps.write('./')) //생성된 소스맵을 스트림에 추가
        .pipe(gulp.dest('dist/js')) //dist 폴더에 저장
        .pipe(reload({stream:true}));
});

gulp.task('minifycss', function(){
	return gulp.src('src/**/*.css') // css 폴더의 css 파일을
		.pipe(sourcemaps.init({loadMaps: true, debug: true})) //소스맵 생성 준비
		.pipe(concat('main.css')) // 병합하고
		.pipe(minifycss()) // minify 해서
		.pipe(sourcemaps.write('./')) //생성된 소스맵을 스트림에 추가
		.pipe(gulp.dest('dist/css')) //dist 폴더에 저장
		.pipe(reload({stream:true}));
});

// 파일 변경 감지
gulp.task('watch', function(){
	gulp.watch('src/**/*.js', ['uglify']);
	gulp.watch('src/**/*.css', ['minifycss']);
	gulp.watch('src/**/*.html', ['minifyhtml']);
});

gulp.task('default', ['server', 'watch']);

/**
 * reload 메서드 : 호출하면 자동으로 브라우저에 새로 빌드된 결과물이 반영되도록 브라우저가 리프레시
 * reload 메서드 옵션
 * - stream:true > 변경된 파일만 stream 으로 브라우저에 전송되어 리프레시 없이도 반영이 가능한 경우 리프레시 없이 반영되게 됨
 * --------------------------------
 */
