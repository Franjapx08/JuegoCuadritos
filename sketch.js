
let shot = []
let y = 0
let y2 = 0
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	fill('gray')
	background('black')


	if (keyIsDown(87)){
		
		y-- 
	}
	if (keyIsDown(83)){

		y++
	}
	rect(200, y, 80, 100)
	for (let i=0; i<shot.length;i++) {
		fill(shot[i].c)
		rect(shot[i].x++, y, shot[i].t, 20)
		shot[i].move()
		
	}
}

function keyPressed(){
	if (keyCode  == UP_ARROW) {
			y--
	}else if (keyCode == DOWN_ARROW) {
		y++
	
	}else if (keyCode == ENTER){
		shot.push(disparo())
	}
	
}

function disparo(){

	
	return {
		x: y2,
		y: y,
		t: 40,
		stepX: 20,
		stepY: 20,
		c: color('black'),
		move () {
			if((this.y + this.t >= height && this.step > 0) 
				|| (this.y - this.t <= 0 && this.step < 0))
				
					this.step = -this.step
				this.y += this.step
				
			

		}
	}
	
	
}
