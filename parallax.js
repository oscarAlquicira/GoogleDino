class parallax{
	constructor(img, x, y , w, h, speedX){
		this.img = img
		this.x = x 
		this.y = y 
		this.w = w
		this.h = h
		this.speedX = speedX
	}
	draw(){
		image(this.img, this.x, this.y, this.w,this.h)
	}
	move(){
		this.x -= this.speedX

		if(this.isOut()){
			this.resetPositionX()
		}
	}
	isOut(){
		return this.x <= -this.w
	}
	resetPositionX(){
		this.x = this.w
	}
}