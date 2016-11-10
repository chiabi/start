'use strict';
// gulpfile.js에서 쓰일 기본 설정 파일

var root, dir, config;

// 프로젝트 루트 경로
root = './public/src'

// 폴더 경로
dir = {
	html:  root + '/**/*.{htm,html}',
	sass:  root + '/sass',
	build : './public/dist'
}

config = {
	// https://www.browsersync.io/docs/options
	browserSync: {
		server : {
			// Serve files from the app directory with directory listing
			basedir: dir.build,
			directory: true,
			// Serve files from the app directory, with a specific index filename
			index: 'index.html'	
		},
		port: 8080, // Use a specific port (instead of the one auto-detected by Browsersync)
		logLevel: "debug", // Show me additional info about the process
		// Decide which URL to open automatically when Browsersync starts. Defaults to "local" if none set.
		open: false, // Stop the browser from automatically opening
		browser: ["google chrome", "firefox"], // Open the site in Chrome & Firefox
		// The small pop-over notifications in the browser are not always needed/wanted.
		notify: false // Don't show any notifications in the browser.
	},
	dir: dir,
	// html-minifier
	// https://github.com/jonschlinkert/gulp-htmlmin
	minifyHtml: {
		removeTagWhitespace:  true,
		minifyCSS:     		  true,
		minifyJS:      		  true
	},
	// Sass + Compass
	compass: {
		src: dir.sass + '/**/*.{sass,scss}',
		// https://www.npmjs.com/package/gulp-compass
		// config_file: './config.rb',
		// Sass 라이브러리
		options: {
			require: [
				'gulp-sass-globbing',
				//'bourbon',
				'susy'
			],
			sass:       dir.sass,
			css:        dir.build + '/css',
			image:      dir.build + '/images',
			javascript: dir.build + '/js',
			font:       dir.build + '/font',
			sourcemap:  true,
			style:      'expanded',
			relative:   true,
			comments:   false
		}
	}

}
module.exports = config;