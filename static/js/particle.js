var CANVAS_HEIGHT = 200
var MIN_FONT_SIZE = 50
var FONT_SIZE_RATE = 15
var PARTICLE_SIZE_RATE = 2
var TEXT = "DASHI LAB"
var TEXT_Y_OFFSET = 20

	var canvas = document.querySelector("#canvas1"),
  ctx = canvas.getContext("2d"),
  particles = [],
  amount = 0,
  mouse = {x:0,y:0},
  radius = 1;


var colors = ["#07889B","#E37222", "#EEAA7B", "#8E2800"];

var ww = canvas.width = window.innerWidth;
var wh = canvas.height = CANVAS_HEIGHT;

function Particle(x,y){
  this.x =  Math.random()*ww;
  this.y =  Math.random()*wh;
  this.dest = {
    x : x,
    y: y
  };
  this.r =  Math.random()*5 + PARTICLE_SIZE_RATE;
  this.vx = (Math.random()-0.5)*20;
  this.vy = (Math.random()-0.5)*20;
  this.accX = 0;
  this.accY = 0;
  this.friction = Math.random()*0.05 + 0.94;

  this.color = colors[Math.floor(Math.random()*5)];
}

Particle.prototype.render = function() {

  this.accX = (this.dest.x - this.x)/500;
  this.accY = (this.dest.y - this.y)/500;
  this.vx += this.accX;
  this.vy += this.accY;
  this.vx *= this.friction;
  this.vy *= this.friction;

  this.x += this.vx;
  this.y += this.vy;

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
  ctx.fill();

  var a = this.x - mouse.x;
  var b = this.y - mouse.y;

  var distance = Math.sqrt( a*a + b*b );
  if(distance<(radius*70)){
    this.accX = (this.x - mouse.x)/100;
    this.accY = (this.y - mouse.y)/100;
    this.vx += this.accX;
    this.vy += this.accY;
  }

}

function onMouseMove(e){
  mouse.x = e.clientX;
  mouse.y = e.clientY - canvas.getBoundingClientRect().top + document.body.scrollTop;
}

function onMouseLeave(e){
  mouse.x = -9999;
  mouse.y = -9999;
}

function onTouchMove(e){
  if(e.touches.length > 0 ){
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  }
}

function onTouchEnd(e){
  mouse.x = -9999;
  mouse.y = -9999;
}

function onTouchCancel(e){
  mouse.x = -9999;
  mouse.y = -9999;
}

function initScene(){
  ww = canvas.width = window.innerWidth;
  wh = canvas.height = CANVAS_HEIGHT;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  var fontSize = ww/FONT_SIZE_RATE > MIN_FONT_SIZE ? ww/FONT_SIZE_RATE : MIN_FONT_SIZE;

  ctx.font = "bold " + fontSize + "px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(TEXT, ww/2, wh/2 + TEXT_Y_OFFSET);

  var data  = ctx.getImageData(0, 0, ww, wh).data;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "screen";

  particles = [];
  for(var i=0;i<ww;i+=Math.round(ww/150)){
    for(var j=0;j<wh;j+=Math.round(ww/150)){
      if(data[ ((i + j*ww)*4) + 3] > 150){
        particles.push(new Particle(i,j));
      }
    }
  }
  amount = particles.length;

}

function onMouseClick(){
  radius++;
  if(radius ===5){
    radius = 0;
  }
}

function render(a) {
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < amount; i++) {
    particles[i].render();
  }
};

canvas.addEventListener("resize", initScene);
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mouseleave", onMouseLeave);
canvas.addEventListener("touchmove", onTouchMove);
canvas.addEventListener("click", onMouseClick);
canvas.addEventListener("touchend", onTouchEnd);
canvas.addEventListener("touchcancel", onTouchCancel);
initScene();
requestAnimationFrame(render);

