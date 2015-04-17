function Slider(container, nav){
	this.container = container;
	this.nav = nav.show();

	this.imgs = this.container.find('img');
	this.imgWidth = this.imgs[0].width; //600
	this.imgLen = this.imgs.length; //4

	this.current = 0;

}

Slider.prototype.transition = function(coords){
	this.container.animate({
		'margin-left': coords || -(this.current * this.imgWidth)
	});
};

Slider.prototype.setCurrent = function(dir){
	var pos = this.current;
	pos += (~~(dir === 'next') || -1); // ~~ converts boolean to number


	this.current = (pos < 0) ? this.imgLen -1 : pos % this.imgLen;

	// % called mod - remainder when number is divided by total //here this resets automaticalled
	return pos;
};