x = 0;
y = 0;

screen_width;
screen_height;
apple = "apple.png";
draw_apple = "";
speak_data = "";
to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
  to_number = Number(content);
 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup()
{
  screen_width = 0;
  screen_height = 0;
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }

  for(var i = 1; i <= to_number; i++)
{
  x = Math.floor(Math.random() * 700);
  y = Math.floor(Math.random() * 400);
  image(apple, x, y, 50, 50)
}
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    document.getElementById("status").innerHTML = to_number + "Apples Drawn";
    speak_data = "Apples Drawn";
}

function preload()
{
    apple = loadImage("apple.png");
}

function gotResult()
{
if(Number.isInteger(to_number));
{
  draw_apple = "set";
}
}

screen_width = window.innerWidth;
screen_height = window.innerHeight;

function createCanvas()
{
  screen_innerWidth = 150;
  screen_innerHeight = 150;
}