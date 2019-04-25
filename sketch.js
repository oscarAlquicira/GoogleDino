//Variables 
var yVelocidad 
var obstaculos_nuevos	= []
var y
var velocidad
var camino 
var onGround 
var puntuacion
//
var x2 
var tamRadio 
var tam2 
var x1
var y1

var obs

var vg 
const arreglo = []

function preload(){
		vg = loadImage('imagenes/layer1.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//declaracion
	y = 40
	yVelocidad = 0	
	velocidad = 6
	camino = height - 28
	onGround = false
	puntuacion = 0 

	for(var i = 0 ; i < 2 ; i++) {
				let p = new parallax(vg, i*width, 0, width, height,2)
				arreglo.push(p)
	}
}

function draw() {

		
	
	background("FF00")
	for(var i of arreglo ){
		i.draw()
		i.move()
		
	}	
	line(0,camino, width, camino)	
	ellipse(40,y,40)
	textSize(30)
	text("Puntuación: " + puntuacion, floor(width * 0.5), 100)
	puntuacion++

	if(frameCount % 120 === 0 ){
		velocidad *= 1.05 
		
		}

	if(frameCount % 30 === 0 ){
			if(random(0 , 1) > 0.5){
			generaObstaculo()	
		}
	}
	
	actualizaObstaculo()
	controlRex()


	
}

function controlRex(){
	

	if(y + 20 + yVelocidad < camino){
		
		yVelocidad += 0.25;
		onGround = false
	}
	else{
		yVelocidad = 0
		onGround = true
	}
	

	if(keyIsDown(UP_ARROW) || keyIsDown(32)){	
		if(onGround){
			yVelocidad -= 10
			onGround = false
			
		}
		
	}

	y += yVelocidad

}

function actualizaObstaculo(){

	for(var i = obstaculos_nuevos.length - 1  ; i >= 0; i--){
		
		obstaculos_nuevos[i].x -= velocidad
		x2 = obstaculos_nuevos[i].x
		tamRadio = obstaculos_nuevos[i].tam
		tam2 = tamRadio / 2 
		
		if(x2 > -700){
			
			rect(height +  x2 , camino - tamRadio, tamRadio, tamRadio)
			//rect(x,100,50,50)
			 x1 = height + x2
			 y1 = camino - tam2
			
			if(dist(x1, y1, 40, y ) < tam2 - 10 ) {
				//Colision
				textSize(40)
				text("Game over", width / 2 , height / 2)
				textSize(40)
				text("Presiona F5 para comenzar de nuevo", width / 2 , height / 2 + 40)
				noLoop();
			}
		}
		else{
			obstaculos_nuevos.splice(i,1)
		}
	}
}

function generaObstaculo(){
	
	 obs = new obstaculos(random(20,40) , null)
	 obstaculos_nuevos.push(obs)
}