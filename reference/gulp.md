## gulp
 - Streaming build system : Node의 스트림 기능을 통한 빌드 시스템
 	- 참고 : [원문](http://neethack.com/2013/12/understand-node-stream-what-i-learned-when-fixing-aws-sdk-bug/), [번역](http://programmingsummaries.tistory.com/363)
 - refernce
	- [gulp.js](http://gulpjs.com/)
	- [gulp 한국어 문서](https://github.com/preco21/gulp-docs-ko)
	- [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)
	- [gulp 입문 1-Gulp에 대한 소개](http://programmingsummaries.tistory.com/356)
	- [Gulp #1(걸프 설치 및 개요)](http://webclub.tistory.com/467)
	- [12.2 편: GULP – 응용하기 (babel, webpack, nodemon, browser-sync)](https://velopert.com/1456)

#### 1. 설치

```
 $ npm install -g gulp-cli

 // 이전버전을 설치했을 경우 삭제해 주어야 충돌이 없다
 $ npm rm -g gulp
```

#### 2. 프로젝트 디렉토리 초기화 : packkage.json 파일이 생성됨

```
 $ npm init
```

#### 3. gulp를 프로젝트 devDependencies로 설치

```
 $ npm install --save-dev gulp
```

#### 4. gulpfile.js 를 프로젝트 루트에 생성
```javascript
 # gulpfile.js

 var gulp = require('gulp');

 gulp.task('default', function(){
	// default로 수행할 task 작성
 });
```

#### 5. gulp 실행 : default로 지정한 task 실행
```
 $ gulp 
```
