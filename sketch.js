const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg
var engine
var world
var towerImg
var ground
var tower

function preload() {
  bg = loadImage("assets/background.gif")
  towerImg = loadImage("assets/tower.png")
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world
  var options = {isStatic:true}
  ground = Bodies.rectangle(600,590,1600,20,options);
  tower = Bodies.rectangle(130,350,160,310,options);
  World.add(world, ground)
  World.add(world,tower)
  rectMode(CENTER)
}

function draw() {
  image(bg,0,0,width,height)
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,1600,20)
  push()
  imageMode(CENTER)
  image(towerImg,tower.position.x,tower.position.y,160,310)
  pop()
}