// Inspired by http://phrogz.net/tmp/canvas_zoom_to_cursor.html
panZoomImage = {
	canvas: null,
};

panZoomImage.displayImage = function displayImage(container, img) {
	this.canvas = container;
	this.ctx = this.canvas.getContext('2d');
	this.currentImage = img;
	this.canvas.width = this.currentImage.width;
	this.canvas.height = this.currentImage.height;
	this.redraw();
};

panZoomImage.redraw = function redraw() {
	if (this.currentImage) {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.drawImage(this.currentImage, 0, 0);
	}
};
