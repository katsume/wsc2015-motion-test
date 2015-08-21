var $= require('jquery');

var DIMENTIONS= 3,
	POINTS_PER_FIGURE= 13;

var Motion= function(){

	this._data= [];
	this._index= [];

	this._fetch();
};

Motion.prototype._fetch= function(){

	$.ajax({
		url: './walk.txt',
		context: this,
		success: function(data){
			this._data= this._parseData(data);
			// console.log(this._data[0]);
		},
		error: function(jqXHR, textStatus, errorThrown){
			throw new Error(textStatus+' : '+errorThrown);
		}
	});
};

Motion.prototype._parseData= function(src){

	var lines= src.trim().split('\n'),
		components,
		frame= [],
		dst= [];

	var scale= 1;

	lines.forEach(function(line){
		components= line.trim().split('\t');

		components= components.map(function(component){
			return Number(component)*scale;
		});

		//	Right
		frame.push([
			-components[0],
			-components[2],
			components[1]
		]);

		//	Front
		// frame.push([
		// 	components[1],
		// 	-components[2],
		// 	components[0]
		// ]);

		if(frame.length>=POINTS_PER_FIGURE){
			dst.push(frame);
			frame= [];
		}
	});



	dst.forEach(function(points){
	});

	return dst;
};

Motion.prototype.loop= function(){

	if(!this._data.length){
		return;
	}

	this._index++;
	if(this._index>=this._data.length){
		this._index= 0;
	}
};

Motion.prototype.getData= function(){
	return this._data[this._index];
};

module.exports= Motion;
