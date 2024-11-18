var heading;
var executeButton;
var outputParagraph;
var inputElement;

var fortunes = ["put on some comfortable pjs", " wear a very pretty dress", "keep it formal with a suit", "dress like a macho with leather a jacket"];


document.addEventListener("DOMContentLoaded", function(){

  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputParagraph = document.getElementById("outputText");
  inputElement = document.getElementById("myInput");

  executeButton.addEventListener("click", function(){
    generateFortune();
  });


});

///////

function generateFortune(){
  var currentInputText = inputElement.value;

  var randomFortuneIndex = Math.floor(Math.random()*fortunes.length);
  outputParagraph.innerText = currentInputText + ", you should " + fortunes[randomFortuneIndex];

  restyleOutput();

}

function restyleOutput() {
  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;
  var Fonts = ["fantasy", "cursive", "inherit", "monospace", "serif", "sans-serif"];
  var randomFontSize = Math.floor(Math.random() * (100 - 5 + 1)) + 5;


  var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  var randomFontIndex = Math.floor(Math.random() * Fonts.length);
  var randomFont = Fonts[randomFontIndex]; 

  outputParagraph.style.color = outputColorString;
  outputParagraph.style.fontFamily = randomFont;
  outputParagraph.style.fontSize = randomFontSize + "px";

}