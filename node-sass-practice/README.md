## Node-Sass-Practice
 - 참고사이트
 	- [npmjs.com 내 package.json 문서](https://docs.npmjs.com/files/package.json)
 	- [모두 알지만 모두 모르는 package.json](https://docs.npmjs.com/files/package.json)
 	- [node-sass](https://github.com/sass/node-sass)
 - package.json 생성
```
	$npm init
```
 - package.json '--yes' init flag : author만 묻고 나머지는 기본값으로 설정되어 생성 됨
```
 	$npm init --yes
 	$npm init -y
```
 - package.json 규칙
 	- name : 필수 입력, URL의 일부이자 커맨드라인의 인수, 폴더명
 	- version : 필수 입력
 	- description : 설명을 문자열로 기술 ( npm search 리스트에 표기 )
 	- keywords : 문자열 배열로 설명 ( npm search 리스트에 표기 )
 	- hompage : 프로젝트 홈페이지가 있을 경우
 	- license : 라이센스 명시 ( type, url 등의 라이센스 목록을 쓰는 방식은 더이상 사용하지 않는다)
 	- private : true일 경우 배포 되는 것을 막음
 	```
		{
		  "name": "node-sass-practice",
		  "version": "1.0.0",
		  "description": "node-sass를 연습해보는 파일",
		  "main": "index.js",
		  "scripts": {
		    "test": "echo \"Error: no test specified\" && exit 1"
		  },
		  "keywords": [],
		  "author": "chiabi <chiabi@gmail.com> (http://github.com/chiabi)",
		  "license": "UNLICENSED",
		  "private": true
		}
	```
 	- bugs : 프로젝트의 이슈와 버그 트래킹을 볼 수 있는 url, 이슈를 알릴 e-mail 주소를 입력
 	```
		  "bugs":{
			"url": "http://github.com/chiabi/start/issues",
			"email": "chiabi@gmail.com"
		  }
	```
 	- author : 한사람만 지정 ( "contirbutors" 는 여러사람을 배열로 지정 ),  name을 필수적으로 포함(email, url은 선택적)
 	```
		  "author":{
		  	"name": "chiabi",
			"email": "chiabi@gmail.com",
			"url": "http://github.com/chiabi/start"
		  }
	```
 	- files : 프로젝트에 포함된 파일의 배열 (.npmignore, .gitignore 등은 무시된다) - package.json, README, CHANGELOG, LICESE또는 LICENCE는 설정에 관계없이 항상 포함
 	- main : 프로그램의 시작점이 되는 모듈의 ID
 	- repository : 소스 코드가 관리되는 저장소 위치를 지정 (소스 코드 참여에 도움이 됨)
 	```
		  "repository":{
		  	"type": "git"
			"url": "http://github.com/chiabi/start"
		  }
	```
 	- scripts : 다양한 타이밍에서 실행되는 script 명령들을 포함하고 있는 사전, scripts 항목 객체에서 키는 이벤트, 값은 이때 실행될 커맨드
 	- dependencies : 의존성 모듈(패키지 이름, 해당 패키지의 버전 범위를 지정한 객체 입력)
 	- devDependenscies : 테스트 관련 모듈, 트랜스 파일러 관련 모듈 등 운영이 아닌 개발 단계에서만 필요한 의존성 모듈 설치
 	```
		  "devDependencies":{
			"coffee-script": "~1.6.3"
		  },
		  "script":{
			"prepublish": "coffee -o lib/ -c src/waza.coffee"
		  },
		  "main": "lib/waza.js"
	```
	*prepublish 스크립트가 사용자들이 JavaScript로 변환하기 않고도 사용할 수 있도록 퍼블리싱 하기 전에 실행 됨</span>

## Susy
 - [Susy doc](http://susydocs.oddbird.net/en/latest/install/)
