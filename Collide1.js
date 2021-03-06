
var fontsize = "15px";

  var canvas = document.createElement("canvas"), c = canvas.getContext("2d");
  canvas.width = 400;
  canvas.height = 400;
  particle1 = new Particle;
  particle2 = new Particle2;

  document.body.appendChild(canvas);

  c.fillStyle= "black";
  c.fillRect (0, 0, canvas.width, canvas.height);
  c.font="1px Georgia";
  c.fillText("Kesley", 1, 1);

  var checkCollision = function(){
    if((Math.abs(particle1.y - particle2.y) <= particle1.sideLength && Math.abs(particle1.x - particle2.x) <= particle1.sideLength))
      {
      if (Math.abs(particle1.y - particle2.y) < Math.abs(particle1.x - particle2.x) ){
         particle1.vx = -particle1.vx;
         particle2.vx = -particle2.vx;
         particle1.bool1 = !particle1.bool1;
         particle2.bool1 = !particle2.bool1;
      }
      else{
         particle1.vy = -particle1.vy;
         particle1.bool2 = !particle1.bool2;
         particle2.vy = -particle2.vy;
         particle2.bool2 = !particle2.bool2;
      }
    }
  }

  var switchDirection = function(p){
    if(!p.bool1 && p.x >= canvas.width - p.sideLength){
      p.vx = (-Math.random() * 5) - 5;
      p.bool1 = true;
    }
    else if(p.bool1 && p.x <= 0){
      p.vx = (Math.random() * 5) + 5;
      p.bool1 = false;
    }
    if(!p.bool2 && p.y >= canvas.height - p.sideLength){
      p.vy = (-Math.random() * 5 ) - 5;
      p.bool2 = true;
    }
    else if(p.bool2 && p.y <= 0){
      p.vy = (Math.random() * 5 ) + 5;
      p.bool2 = false;
    }
  }
  function Particle2(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() * 5) + 5;
    this.vy = (Math.random() * 5) + 5;
    this.sideLength = 50;
    this.bool1 = false;
    this.bool2 = false;

  }
  Particle2.prototype.draw = function(){
    this.x += this.vx;
    this.y += this.vy;
    c.fillStyle = "white";
    c.fillRect(this.x, this.y, this.sideLength, this.sideLength);
    addText(this);
    switchDirection(this);
  };
  function Particle(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() * 5) + 5;
    this.vy = (Math.random() * 5) + 5;
    this.sideLength = 50;
    this.bool1 = false;
    this.bool2 = false;
  }
  var addText = function(par){
    n = c;
    n.fillStyle = "black";
    n.font= fontsize + " Georgia";
    var realsize = parseInt(fontsize, 10);
    n.fillText("Kesley", par.x , par.y + par.sideLength / 2 );
  }
  Particle.prototype.draw = function(){
    this.x += this.vx;
    this.y += this.vy;
    c.fillStyle = "white";
    c.fillRect(this.x, this.y, this.sideLength, this.sideLength);
    addText(this);
    switchDirection(this);

  };

  setInterval(function(){

    c.fillStyle= "black";
    c.fillRect (0, 0, canvas.width, canvas.height);
    particle1.draw();
    particle2.draw();
    checkCollision();

  }, 30);
