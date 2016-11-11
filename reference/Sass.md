# Sass

참고사이트
-----
 - [Sass 사이트](http://sass-lang.com/)
 - [Sass 강좌 - 한 눈에 보기](https://velopert.com/1712)
 		* 위 문서 작성자분이 참고하셨다는 문서들
 	- [“Sass Basics”](http://sass-lang.com/guide). Sass.
	- [“Getting Started With Sass”](https://scotch.io/tutorials/getting-started-with-sass). Scotch.io
	- [“The Sass Ampersand”](https://css-tricks.com/the-sass-ampersand/). CSS-Tricks.
	- [“The Inception Rule”](http://thesassway.com/beginner/the-inception-rule). The Sass Way.
	- [“Understanding placeholder selector”](http://thesassway.com/intermediate/understanding-placeholder-selectors). The Sass Way.
	- [“Sass Basics: The Mixin Directive”](https://www.sitepoint.com/sass-basics-the-mixin-directive/). SitePoint
	- [“Pure Sass Functions”](http://thesassway.com/advanced/pure-sass-functions). The Sass Way.
	- [The Sass Way](http://www.thesassway.com/)
	- [Sitepoint Sass Reference](https://www.sitepoint.com/sass-reference/)
	- [Sitepoint Sass Articles](https://www.sitepoint.com/html-css/css/sass-css/)

Sass 컴파일 방법
-----
 1. 오리지널 Ruby Sass 사용

  ```
	$ gem install sass
 	$ sass style.scss style.css
  ```
 2. GUI 어플케이션 사용 - [Koala](http://koala-app.com/), [Hammer](http://hammerformac.com/), [Compass](http://compass.kkbox.com/) 등
 3. [libSass](http://sass-lang.com/libsass) : C/C++ 언어로 작성된 매우 빠른 성능의 Sass 엔진

  > LibSass is a C/C++ port of the Sass engine. The point is to be simple, faster, and easy to integrate.

  * [Ruby, gem?, Node.js, npm? 환경 설정 참고](https://github.com/chiabi/Sass-study/tree/master/chapter1)


[node-sass](https://www.npmjs.com/package/node-sass)
-----
 - Node.js 환경에서 libSass를 사용할 수 있게하는 라이브러리

  > Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
 
 - Ruby Sass 보다 성능이 빠르지만 업데이트를 기다려야한다. ([참고 : sass compatibility](http://sass-compatibility.github.io/))

### install
	```
		# NPM 을 통하여 node-sass 글로벌 설치
		$ npm install -g node-sass
		 
		# 컴파일하여 현재 디렉토리에 저장
		$ node-sass style.scss -o .
		 
		# style.scss 파일에 변화가 있을 떄 마다 자동으로 리컴파일
		$ node-sass style.scss -w -o .
 	```

### [Options](https://github.com/sass/node-sass#command-line-interface)
 	```
    -w, --watch                Watch a directory or file
    -r, --recursive            Recursively watch directories or files
    -o, --output               Output directory
    -x, --omit-source-map-url  Omit source map URL comment from output
    -i, --indented-syntax      Treat data from stdin as sass code (versus scss)
    -q, --quiet                Suppress log output except on error
    -v, --version              Prints version info
    --output-style             CSS output style (nested | expanded | compact | compressed)
    --indent-type              Indent type for output CSS (space | tab)
    --indent-width             Indent width; number of spaces or tabs (maximum value: 10)
    --linefeed                 Linefeed style (cr | crlf | lf | lfcr)
    --source-comments          Include debug info in output
    --source-map               Emit source map
    --source-map-contents      Embed include contents in map
    --source-map-embed         Embed sourceMappingUrl as data URI
    --source-map-root          Base path, will be emitted in source-map as is
    --include-path             Path to look for imported files
    --follow                   Follow symlinked directories
    --precision                The amount of precision allowed in decimal numbers
    --error-bell               Output a bell character on errors
    --importer                 Path to .js file containing custom importer
    --functions                Path to .js file containing custom functions
    --help                     Print usage info
	```

## Gulp Sass

 > Gulp extension @dlmanning has created a gulp sass plugin based on node-sass: https://github.com/dlmanning/gulp-sass

 *reference : [gulp.md](https://github.com/chiabi/start/blob/master/reference/gulp.md)
