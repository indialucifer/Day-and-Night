const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunset1.png" ;
var hour;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    strokeWeight(100);
    text("Time:"+hour, 100,100);

    Engine.update(engine);
    
}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    hour = responseJSON.datetime;
    hour = hour.slice(11,13);
    
    if (hour >= 04 && hour <=06){
        bg = "sunrise1.png";
    }
    else if (hour >= 06 && hour <=08){
        bg = "sunrise2.png";
    }
    else if (hour >= 23 && hour ==0){
        bg = "sinset10.png.png";
    }
    else if (hour == 0 && hour <= 03){
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }

    backgroundImg = loadImage(bg);
}
