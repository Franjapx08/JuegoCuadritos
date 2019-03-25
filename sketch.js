//let bg = 0
let pium = []
let y = 0
let y2 = 0
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	fill('blue')
	background('white')
	if (keyIsDown(UP_ARROW))
		y2--
	if (keyIsDown(DOWN_ARROW))
		y2++
	if (keyIsDown(87))
		y-- 
	if (keyIsDown(83))
		y++
	rect(200, y, 80, 100)
	rect(800, y2, 80, 100)
	for (let i=0; i<pium.length;i++) {
		fill(pium[i].c)
		rect(pium[i].x++, y, pium[i].t, 20)
		pium[i].move()
		
	}
}

function keyPressed(){
	if (keyCode  == UP_ARROW) {
		//bg = bg == 255 ? 0 : 255
		y--
	}else if (keyCode == DOWN_ARROW) {
		y++
	
	}else if (keyCode == ENTER){
		pium.push(disparo())
		console.log("disparp")
	}
	console.log(y)
	console.log(y2)
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
	
	//return c
}
