// Inspired by http://phrogz.net/tmp/canvas_zoom_to_cursor.html
panZoomImage = {
	canvas: null,
	scale: null
};

panZoomImage.displayImage = function displayImage(container, img) {
	this.currentImage = img;
	this.canvas = container;
	// 父元素 宽度 高度 
	const clientWidth = container.parentElement.clientWidth;
	this.ctx = this.canvas.getContext('2d');
	this.canvas.width = clientWidth;
	// 宽高等比缩放， 父元素宽度超过子元素宽度时不自适应
	this.scale = clientWidth / this.currentImage.width;
	if (this.scale > 1) {
		this.scale = 1;
	}
	this.canvas.height = this.currentImage.height * this.scale;
	this.redraw();
};

panZoomImage.redraw = function redraw() {
	if (this.currentImage) {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		// image在目标canvas上绘制的宽度。 允许对绘制的image进行缩放。 如果不说明， 在绘制时image宽度不会缩放。
		this.ctx.drawImage(this.currentImage, 0, 0, this.currentImage.width * this.scale, this.currentImage.height * this.scale);
	}
};
