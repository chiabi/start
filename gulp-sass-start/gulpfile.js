// gulp 및 패키지 모듈 호출
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps');

gulp.task('sass', function(){
    gulp.src('./sass/**/*.{scss,sass}')
        .pipe(sourcemaps.init())
        .pipe(sass({
            /**
             * outputStyle (Type : String  , Default : nested)
             * CSS의 컴파일 결과 코드스타일 지정
             * Values : nested, expanded, compact, compressed
             */
            // includePaths: ['node_mobules/susy/sass'], // gulp 에서 susy 추가
            outputStyle: 'expanded'
        }).on('error', sass.logError)) // gulp는 코드에 오류가 있을때 터미널이 실행되는 것을 중단하고 실제 워크플로우를 방해함 그것을 해결하는 소스
        .pipe(sourcemaps.write('./maps')) //map 폴더에 따로 저장
        .pipe(gulp.dest('./css'));
});
gulp.task('watch', function(){
    gulp.watch('./sass/**/*.{scss,sass}', ['sass']) // 지속적인 관찰을 위한 watch task
});
gulp.task('default', ['sass', 'watch']) // $ gulp 실행시 sass, watch 순으로 실행