module.exports = function(grunt) {
	grunt.initConfig({
		concat : {
			js : {
				src : ['src/**/*js'],
				dest : 'dist/script.js',
			},
			css : {
				src : ['src/*.css','src/**/*.css'],
				dest : 'dist/style.css',
			},
		},
		watch : {
			options : {
				livereload : true,
			},
			js : {
				files : ['src/**/*js'],
				tasks : ['concat:js'],
			},
			css : {
				files : ['src/*.css','src/**/*.css'],
				tasks : ['concat:css'],
			},
		},
		uglify : {
			t1 : {
				options : {
					sourceMap : true,
				},
				files : {
					'dist/script.min.js' : 'dist/script.js', 
				},
			},			
		},
		cssmin : {
			target : {
				options : {
					sourceMap : true,
				},
				files : {
					'dist/style.min.css' : 'dist/style.css',
				},
			},
		},
		express : {
			all : {
				options: {
					port : 9000,
					bases : ['src'],
					hostname : 'locahost',
					livereload : true,
				},
			},
		}, 
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-express');
	grunt.registerTask('start', ['concat','uglify','cssmin','watch']);
}