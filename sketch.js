let cam;
let cls;
function preload(){
  cls = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vVNeudk4h/"+"model.json")
  print(cls);
}




function setup() {
  createCanvas(400,400);
  cam = createCapture(VIDEO)
  cam.size(400,400)
  cam.hide()

  cls.classify(cam, result)
}

function result(e,r){
  print(r[0].label)
  if(r[0].label=="1"){
    x=x+1
  }
  if(r[0].label=="-1"){
    x=x-1
  }

  cls.classify(cam, result)
}

x=200;
y=200;
w=50;
function draw(){
  background(255)
  image(cam,0,0,400,400)
  rect(x,y,w,w);
  
  if(keyIsDown(37)){
    x=x-2
  
  }  
    if(keyIsDown(39)){
    x=x+2
  }
  if(keyIsDown(38)){
    y=y-2
  }
  if(keyIsDown(40)){
    y=y+2
  }
  
}
function keyPressed(){
  print(keyCode)
  if(keyCode==37){
   x=x-1 
  }
  if(keyCode==39){
    x=x+1
  }
  
}