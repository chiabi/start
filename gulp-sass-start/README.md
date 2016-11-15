## gulp-sass-start
- refernce
 	- [Sass.md](https://github.com/chiabi/start/blob/master/reference/Sass.md)
 	- [gulp.md](https://github.com/chiabi/start/blob/master/reference/gulp.md)
 	- [package.json.md](https://github.com/chiabi/start/blob/master/reference/package.json.md)
 	- [Configuring Gulp to use LibSass with Susy](https://zellwk.com/blog/gulp-libsass-with-susy/)
 	- [susy settings](http://webclub.tistory.com/246)

### 선행 작업 node.js, bower, gulp 설치
- Node JS - [http://nodejs.org](http://nodejs.org)
- Bower - [http://bower.io](http://bower.io)
- Gulp Js - [http://gulpjs.com](http://gulpjs.com)

### 프로젝트 세팅
```
#package.json 생성
$ npm init 

#bower.json 생성
$ bower init 
```
- 프로젝트 디렉터리 상태
```
$ ls -l
total
-rw-r--r-- 1 chihye 197121  371 11월 15 10:16 bower.json
drwxr-xr-x 1 chihye 197121    0 11월 14 16:54 node_modules/
-rw-r--r-- 1 chihye 197121  421 11월 14 16:54 package.json
-rw-r--r-- 1 chihye 197121 1007 11월 15 11:04 README.md
```
* $ bower init 에러 : git Bash에서 아래와 같은 에러가 뜬다면 cmd, powershell등 다른 터미널을 사용
```
	$ bower init
	bower ENOINT        Register requires an interactive shell

	Additional error details:
	Note that you can manually force an interactive shell with --config.interactive
```

### gulp 패키지 설치
```
$ npm install gulp --save-dev
$ npm install gulp-sass --save-dev
$ npm install gulp-sourcemaps --save-dev
```
### bower 패키지 설치
```
$ bower install susy --save
```
- 프로젝트 디렉터리 상태
```
$ ls -l
total
-rw-r--r-- 1 chihye 197121  371 11월 15 10:16 bower.json
drwxr-xr-x 1 chihye 197121    0 11월 15 10:16 bower_components/
drwxr-xr-x 1 chihye 197121    0 11월 14 16:54 node_modules/
-rw-r--r-- 1 chihye 197121  421 11월 14 16:54 package.json
-rw-r--r-- 1 chihye 197121 1316 11월 15 11:07 README.md
```
**  bower_componets 폴더와 css 폴더가 같이 위치에 있는경우 스타일 시트 안에 아래와 같이 import 시킨다
```
@import "bower_components/susy/sass/susy";
```

### gulpfile.js 작성
```javascript
// gulp 및 패키지 모듈 호출
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps');

gulp.task('sass', function(){
    gulp.src('./scss/**/*.{scss,sass}')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogConsole: true // gulp는 코드에 오류가 있을때 터미널이 실행되는 것을 중단하고 실제 워크플로우를 방해함 그것을 해결하는 소스
        })) // Sass 컴파일
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});
gulp.task('watch', function(){
    gulp.watch('./scss/**/*.{scss,sass}', ['sass']) // 지속적인 관찰을 위한 watch task
});
gulp.task('default', ['sass', 'watch']) // $ gulp 실행시 sass, watch 순으로 실행

```
### gulp 실행
```
$ gulp default 또는 $ gulp
```

