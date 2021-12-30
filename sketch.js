const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var martelo, solo, borracha, pedra,ferro;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    //cria os objetos solo,martelo,borracha,pedra é ferro
    solo = new Solo(600,height,1200,20);
    martelo = new Martelo(10,100);
    borracha = new Borracha(600,300,30);
    pedra = new Pedra(450,300);
    ferro = new Ferro(350,300)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    //faz aparecer os objetos no "mundo"
    solo.display();
    martelo.display();
    borracha.display();
    pedra.display();
    ferro.display();
}