var src= './src',
	dest= './build';

module.exports= {
	dest: dest,
	webpack: {
		src: src+'/js/**',
		entry: [
			src+'/js/index.js'
		],
		webpack: {
			module: {
				loaders: [
				]
			}
		},
		uglify: false,
		dest: dest+'/js'
	},
	copy: {
		src: src+'/www/**',
		dest: dest
	},
	sass: {
		src: src+'/sass/',
		sass: {
			style: 'expanded'
		},
		dest: dest+'/css'
	}
}
