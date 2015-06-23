var src= './src',
	dest= './build';

module.exports= {
	dest: dest,
	webpack: {
		src: src+'/js/**',
		webpack: {
			entry: [
				src+'/js/index.js'
			]
		},
		uglify: false,
		dest: dest+'/js'
	},
	copy: {
		src: src+'/www/**',
		dest: dest
	},
	sass: {
		src: src+'/sass/**',
		sass: {
			style: 'expanded'
		},
		pleeease: {
			autoprefixer: {
				browsers: ['last 2 versions']
			},
			minifier: false,
		},
		dest: dest+'/css'
	}
}
